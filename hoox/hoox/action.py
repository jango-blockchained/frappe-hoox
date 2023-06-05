import ccxt
import frappe
import json
from frappe import _
from frappe.desk.form.linked_with import get_linked_docs, get_linked_doctypes


def get_linked_documents(doctype, docname):
    link_info = get_linked_doctypes(doctype)
    docs = get_linked_docs(doctype, docname, link_info)
    # print(docs)
    return docs


def create_api_log(
    api_url, api_method, request_data, status, error_message=None, response_data=None
):
    try:
        doc = frappe.get_doc(
            {
                "doctype": "API Log",
                "api_url": api_url,
                "api_method": api_method,
                "status": status,
                "request_data": request_data,
                "error_message": error_message,
                "response_data": response_data,
            }
        )
        doc.insert(ignore_permissions=True)
        doc.save()
        frappe.db.commit()
    except Exception as e:
        print(f"Error while creating API Log: {e}")


def execute_order(
    action,
    exchange_id,
    symbol,
    price,
    amount,
    order_type,
    market_type,
    leverage,
    user_creds,
):
    try:
        # Get exchange
        exchange_class = getattr(ccxt, exchange_id)
        exchange = exchange_class(
            {
                "apiKey": user_creds.api_key,
                "secret": user_creds.api_secret,
                "enableRateLimit": True,
            }
        )

        order = None

        # Set leverage
        if leverage > 1:
            exchange.set_leverage(leverage)

        # Set testnet
        if user_creds.testnet:
            if "test" in exchange.urls:
                exchange.urls["api"] = exchange.urls["test"]
            else:
                raise ValueError(f"Exchange {exchange_id} does not have a testnet.")

        # Set exchange URL
        order["url"] = exchange.urls["api"]

        # Set
        if action not in ["buy", "sell", "close", None]:
            raise ValueError(f"Invalid action: {action}")

        if action == "buy":
            if order_type == "limit":
                order = exchange.create_limit_buy_order(symbol, amount, price)
            elif order_type == "market":
                order = exchange.create_market_buy_order(symbol, amount)
        elif action == "sell":
            if order_type == "limit":
                order = exchange.create_limit_sell_order(symbol, amount, price)
            elif order_type == "market":
                order = exchange.create_market_sell_order(symbol, amount)
        elif action == "close":
            all_orders = exchange.fetch_open_orders(symbol)
            for sorder in all_orders:
                order += exchange.cancel_order(sorder["id"])

        request_data = {
            "action": action,
            "exchange_id": exchange_id,
            "symbol": symbol,
            "price": price,
            "amount": amount,
            "order_type": order_type,
            "market_type": market_type,
            "leverage": leverage,
        }

        response_data = {"order": order}

        create_api_log(
            api_url="execute_order",
            api_method=action,
            request_data=json.dumps(request_data),
            status="Success",
            response_data=json.dumps(response_data),
        )

        return order

    except AttributeError:
        error_message = f"Exchange {exchange_id} not found in CCXT Pro."
        create_api_log(
            api_url="execute_order",
            api_method=action,
            request_data=request_data,
            status="Error",
            error_message=error_message,
        )
        raise Exception(error_message)
    except ccxt.BaseError as e:
        error_message = f"An error occurred: {str(e)}"
        create_api_log(
            api_url="execute_order",
            api_method=action,
            request_data=request_data,
            status="Error",
            error_message=error_message,
        )
        raise Exception(error_message)


@frappe.whitelist()
def sync_exchanges():
    # Get list of exchanges
    for i, exchange_id in enumerate(ccxt.exchanges):
        if hasattr(ccxt, exchange_id):
            exchange_class = getattr(ccxt, exchange_id)
            exchange = exchange_class()  # create an instance of the exchange class

            # Check if the exchange document already exists
            exchange_exists = frappe.db.exists(
                "CCXT Exchanges", {"exchange_id": exchange.id}
            )

            # set logo_url field in the doc
            exchange_doc_data = {
                "doctype": "CCXT Exchanges",
                "exchange_id": exchange.id,
                "exchange_name": exchange.name,
                "precision_mode": exchange.precisionMode,
                "rate_limit": exchange.rateLimit,
                "testnet": 1 if exchange.urls.get("test") is not None else 0,
                "has": json.dumps(exchange.has),
                "logo_url": exchange.urls.get("logo"),
            }

            if exchange_exists:
                # If the document exists, update its properties
                doc = frappe.get_doc("CCXT Exchanges", {"exchange_id": exchange.id})
                doc.update(exchange_doc_data)
                doc.save()
            else:
                # If the document doesn't exist, create a new one
                new_doc = frappe.get_doc(exchange_doc_data)
                new_doc.insert(ignore_permissions=True)
            return print(
                f"Synced exchange {exchange.name} - {i+1} of {len(ccxt.exchanges)}"
            )
        else:
            return print(f"Exchange '{exchange_id}' is not found in ccxt module.")
    frappe.db.commit()
    return print(f"{len(ccxt.exchanges)} exchanges synced successfully.")


@frappe.whitelist()
def delete_exchanges():
    if frappe.db.count("CCXT Exchanges") == 0:
        frappe.msgprint(f"No exchanges found in database.")
        print(f"No exchanges found in database.")
        return
    docs = frappe.get_all("CCXT Exchanges")
    for i, doc in enumerate(docs):
        linked_docs = get_linked_documents("CCXT Exchanges", doc.name)
        links = len(linked_docs)
        if links > 0:
            frappe.msgprint(
                f"Exchange '{doc.exchange_name}' has {links} linked documents. Skipping deletion."
            )
            print(
                f"Exchange '{doc.exchange_name}' has {links} linked documents. Skipping deletion."
            )
            continue
        frappe.delete_doc("CCXT Exchanges", doc.name)
    frappe.db.commit()
    frappe.msgprint(f"Exchanges deleted successfully.")
    print(f"Exchanges deleted successfully.")
