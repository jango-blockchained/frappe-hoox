import frappe
import os
import ccxt
import requests
import logging
import json
from frappe import _
from frappe import get_doc
from frappe.utils.logger import get_logger
from frappe.desk.form.linked_with import get_linked_docs, get_linked_doctypes
from frappe.utils import get_files_path
from frappe.utils.file_manager import save_file
from urllib.parse import urlparse
from io import BytesIO

ORDER_TYPE_FUNCS = {
    "buy": {
        "limit": "create_limit_buy_order",
        "market": "create_market_buy_order",
    },
    "sell": {
        "limit": "create_limit_sell_order",
        "market": "create_market_sell_order",
    },
}

logger = get_logger(__name__)
logger_level = logging.getLevelName("DEBUG")
logger.setLevel(logger_level)


def get_linked_documents(doctype, docname):
    """
    Get linked documents for a given doctype and docname.
    """

    link_info = get_linked_doctypes(doctype)
    docs = get_linked_docs(doctype, docname, link_info)
    # print(docs)
    return docs


def execute_order(action, exchange_id, symbol, price, quantity, order_type, market_type, leverage, user_creds):
    """
    Execute an order on an exchange using CCXT.
    Returns the order object.
    """

    try:
        # Get exchange
        exchange = getattr(ccxt, exchange_id)({
            "apiKey": user_creds.api_key,
            "secret": user_creds.api_secret,
            "enableRateLimit": True,
            "options": {
                "defaultType": market_type,
                "test": user_creds.testnet
            }
        })

        if user_creds.testnet:
            exchange.set_sandbox_mode(True)

        # Create order object
        response = {}

        # Set leverage
        if market_type == "future" and "set_leverage" in exchange.has and leverage is not None and 0 < leverage <= exchange.maxLeverage:
            exchange.set_leverage(leverage)

        # Set testnet
        if user_creds.testnet:
            if "test" in exchange.urls:
                exchange.urls["api"] = exchange.urls["test"]
                logger.info(f"Exchange URL: {exchange.urls['api']}")
            else:
                raise ValueError(
                    f"Exchange {exchange_id} does not have a testnet.")

        # Set URL
        response["url"] = exchange.urls["api"]

        # Check action
        if action not in ["buy", "sell", "close", None]:
            logger.info(f"Invalid action: {action}")

        # Execute order
        if action in ["buy", "sell"]:
            order_func_name = ORDER_TYPE_FUNCS[action].get(order_type)
            if order_func_name:
                order_func = getattr(exchange, order_func_name)
                if order_type == "limit":
                    response["order"] = order_func(symbol, quantity, price)
                else:
                    response["order"] = order_func(symbol, quantity)
        elif action == "close":
            all_orders = exchange.fetch_open_orders(symbol)
            response["order"] = [exchange.cancel_order(
                order["id"]) for order in all_orders]

        response["original_data"] = exchange.last_json_response
        response["original_data"].pop("Trades", None)

        return response

    except AttributeError as e:
        msg = f"Exchange {exchange_id} not found in CCXT."
        frappe.msgprint(msg)
        logger.error(msg)

    except (ccxt.BaseError, Exception) as e:
        msg = f"An error occurred: {str(e)}"
        frappe.msgprint(msg)
        logger.error(msg)


@frappe.whitelist()
def sync_exchanges():
    """
    Sync exchanges from ccxt module to the database.
    """

    # Get list of exchanges
    for exchange_id in ccxt.exchanges:
        if hasattr(ccxt, exchange_id):
            exchange_class = getattr(ccxt, exchange_id)
            exchange = exchange_class()  # create an instance of the exchange class

            # Check if the exchange document already exists
            exchange_exists = frappe.db.exists("CCXT Exchanges", exchange_id)

            # set logo_url field in the doc
            exchange_doc_data = {
                "doctype": "CCXT Exchanges",
                "exchange_name": exchange.name,
                "exchange_id": exchange_id,
                "precision_mode": exchange.precisionMode,
                "rate_limit": exchange.rateLimit,
                "testnet": 1 if exchange.urls.get("test") is not None else 0,
                "has": json.dumps(exchange.has),
                "logo_url": exchange.urls.get("logo"),
            }

            if exchange_exists:
                # If the document exists, fetch it
                doc = frappe.get_doc("CCXT Exchanges", exchange_id)
            else:
                # If the document doesn't exist, create a new one
                doc = frappe.get_doc(exchange_doc_data)

            # Update the document properties
            doc.update(exchange_doc_data)

            # Save the document with exception handling for duplicate entries
            try:
                doc.save(ignore_permissions=True)
            except frappe.DuplicateEntryError:
                continue

            # Download and attach the logo file
            logo_url = exchange.urls.get("logo")
            auto_download = False
            if logo_url and auto_download:
                # Download and attach the logo file
                # if logo_url:
                try:
                    upload_image_from_url(logo_url, doc.doctype, doc.name)
                except Exception as e:
                    print(f"Error attaching logo for {exchange_id}: {e}")
                # directory = "public/assets/exchange_logos"
                # os.makedirs(directory, exist_ok=True)

                # file_name = f"{exchange_id}_logo.jpg"
                # file_path = os.path.join(directory, file_name)

                # # Skip download if the logo file already exists
                # if not os.path.exists(file_path):
                #     # Save the downloaded file on the server
                #     with open(file_path, "wb") as file:
                #         file.write(requests.get(logo_url).content)

                #     # Attach the file to the CCXT Exchanges document
                #     save_file(file_name, file_path, doc.doctype, doc.name)
                # else:
                #     print(
                #         f"Skipping download for logo {file_name} as it already exists.")

    amount = len(ccxt.exchanges)
    frappe.msgprint(f"{amount} exchanges synced successfully.")
    frappe.db.commit()
    return


@frappe.whitelist()
def delete_exchanges():
    """
    Delete all exchanges from the database.
    """

    if frappe.db.count("CCXT Exchanges") == 0:
        frappe.msgprint(f"No exchanges found in database.")
        return False

    docs = frappe.get_all("CCXT Exchanges")
    amount = len(docs)
    for i, doc in enumerate(docs):
        linked_docs = get_linked_documents("CCXT Exchanges", doc.name)
        links = len(linked_docs)
        if links > 0:
            frappe.msgprint(
                f"Exchange '{doc.exchange_name}' has {links} linked documents. Skipping deletion."
            )
            continue
        frappe.delete_doc("CCXT Exchanges", doc.name)

    frappe.db.commit()
    frappe.msgprint(f"{amount} exchanges deleted successfully.")

    return


@frappe.whitelist()
def add_ip_addresses():
    # replace with your IP addresses
    ip_addresses = ["52.89.214.238", "34.212.75.30",
                    "54.218.53.128", "52.32.178.7"]
    for i, ip_address in enumerate(ip_addresses, start=1):
        friendly_name = 'TradingView™ IP Whitelist {}'.format(i)
        # Check if the doc exists
        if not frappe.db.exists('IP Whitelist', {"ip": ip_address}):
            doc = frappe.new_doc('IP Whitelist')
            doc.friendly_name = friendly_name
            doc.ip = ip_address
            doc.insert()
        frappe.db.commit()
    frappe.msgprint(
        "{} IP addresses added successfully.".format(len(ip_addresses)))
    return


@frappe.whitelist()
def download_exchange_logo(exchange_id, logo_url):
    directory = "public/images/exchange_logos"
    os.makedirs(directory, exist_ok=True)

    url_file_name = os.path.basename(logo_url)
    # Split the filename into name and extension
    url_name, url_extension = os.path.splitext(url_file_name)

    file_name = f"{exchange_id}_logo.{url_extension.lstrip('.')}"
    file_path = os.path.join(directory, file_name)

    response = requests.get(logo_url)
    if response.status_code == 200:
        with open(file_path, "wb") as file:
            file.write(response.content)
        print(f"Logo downloaded for exchange {exchange_id}")
    else:
        print(f"Failed to download logo for exchange {exchange_id}")


@frappe.whitelist()
def download_all_exchange_logos():
    directory = "public/images/exchange_logos"
    os.makedirs(directory, exist_ok=True)

    for exchange_id in ccxt.exchanges:
        exchange_class = getattr(ccxt, exchange_id)
        exchange = exchange_class()

        logo_url = exchange.urls.get("logo")
        if logo_url:
            download_exchange_logo(exchange_id, logo_url)
        #     file_name = f"{exchange_id}_logo.png"
        #     file_path = os.path.join(directory, file_name)

        #     response = requests.get(logo_url)
        #     if response.status_code == 200:
        #         with open(file_path, "wb") as file:
        #             file.write(response.content)
        #         print(f"Logo downloaded for exchange {exchange_id}")
        #     else:
        #         print(f"Failed to download logo for exchange {exchange_id}")
        # else:
        #     print(f"No logo available for exchange {exchange_id}")


def upload_image_from_url(url, document_doctype, document_name, file_name=None):
    # Download the image from the URL
    response = requests.get(url)

    # Check if the response is an image
    if response.headers['Content-Type'].startswith('image/'):
        # Set the file_name if not provided
        if not file_name:
            file_name = os.path.basename(url)

        # Save the downloaded file as a temporary file
        with open(file_name, "wb") as file:
            file.write(response.content)

        # Attach the file to the document
        attached_file = save_file(
            file_name, file.name, document_doctype, document_name)

        # Remove the temporary file
        os.remove(file_name)

        return attached_file
    else:
        frappe.throw(_("The provided URL is not an image."))
