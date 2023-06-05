import ccxt
import frappe
import json
from frappe.utils.logger import get_logger
from frappe import _
from frappe.desk.form.linked_with import get_linked_docs, get_linked_doctypes

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
logger.setLevel("DEBUG")


def get_linked_documents(doctype, docname):
    """
    Get linked documents for a given doctype and docname.
    """

    link_info = get_linked_doctypes(doctype)
    docs = get_linked_docs(doctype, docname, link_info)
    # print(docs)
    return docs


def execute_order(action, exchange_id, symbol, price, amount, order_type, market_type, leverage, user_creds):
    """
    Execute an order on an exchange using CCXT.
    Returns the order object.
    """

    try:
        # Get exchange
        exchange_class = getattr(ccxt, exchange_id)
        exchange = exchange_class({
            "apiKey": user_creds.api_key,
            "secret": user_creds.api_secret,
            "enableRateLimit": True,
        })

        # Create order object
        order = None

        # Set leverage
        if market_type == "future" and "set_leverage" in exchange.has and leverage is not None and leverage > 0 and leverage <= exchange.maxLeverage:
            exchange.set_leverage(leverage)

        # Set testnet
        if user_creds.testnet:
            if "test" in exchange.urls:
                exchange.urls["api"] = exchange.urls["test"]
            else:
                log.error(f"Exchange {exchange_id} does not have a testnet.")

        # Check action
        if action not in ["buy", "sell", "close", None]:
            log.error(f"Invalid action: {action}")

        # Execute order
        if action in ["buy", "sell"]:
            order_func_name = ORDER_TYPE_FUNCS[action].get(order_type)
            if order_func_name:
                order_func = getattr(exchange, order_func_name)
                order = order_func(
                    symbol, amount, price) if order_type == "limit" else order_func(symbol, amount)
        elif action == "close":
            all_orders = exchange.fetch_open_orders(symbol)
            order = [exchange.cancel_order(single_order["id"])
                     for single_order in all_orders]

        # print(order)
        return order

    except AttributeError as e:
        logger.error(f"Exchange {exchange_id} not found in CCXT.")

    except (ccxt.BaseError, Exception) as e:
        logger.error(f"An error occurred: {str(e)}")


@frappe.whitelist()
def sync_exchanges():
    """
    Sync exchanges from ccxt module to the database.
    """

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
                doc = frappe.get_doc("CCXT Exchanges", {
                                     "exchange_id": exchange.id})
                doc.update(exchange_doc_data)
                doc.save()
            else:
                # If the document doesn't exist, create a new one
                new_doc = frappe.get_doc(exchange_doc_data)
                new_doc.insert(ignore_permissions=True)

            current_position = i + 1
            amount_exchanges = len(ccxt.exchanges)
            logger.info(
                f"Synced exchange {exchange.name} - {current_position} of {amount_exchanges}"
            )
        else:
            frappe.msgprint(
                f"Exchange '{exchange_id}' is not found in ccxt module.")

    frappe.db.commit()
    amount = len(ccxt.exchanges)
    frappe.msgprint(f"{amount} exchanges synced successfully.")

    return True


@frappe.whitelist()
def delete_exchanges():
    """
    Delete all exchanges from the database.
    """

    if frappe.db.count("CCXT Exchanges") == 0:
        frappe.msgprint(f"No exchanges found in database.")
        return False

    docs = frappe.get_all("CCXT Exchanges")
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
    amount = len(docs)
    frappe.msgprint(f"{amount} exchanges deleted successfully.")

    return True
