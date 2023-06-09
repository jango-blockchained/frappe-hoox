import ccxt
import frappe
import asyncio
import aiohttp

class DataFeed:
    def __init__(self, exchanges, pairs):
        self.exchanges = exchanges
        self.pairs = pairs

    async def fetch_and_store_data(self):
        async with aiohttp.ClientSession() as session:
            tasks = []
            for exchange_name in self.exchanges:
                exchange = getattr(ccxt, exchange_name)()
                # Set the desired rate limit in milliseconds (e.g., 2 seconds)
                exchange.rateLimit = 2000
                for pair in self.pairs:
                    task = asyncio.create_task(
                        self.fetch_and_store_exchange_data(session, exchange, pair, exchange_name))
                    tasks.append(task)

            await asyncio.gather(*tasks)

    async def fetch_and_store_exchange_data(self, session, exchange, pair, exchange_name):
        try:
            klines = await self.fetch_klines_with_rate_limit(
                session, exchange, pair)
            frappe_data = self.format_data_for_frappe(
                klines, pair, exchange_name)
            await self.store_data_in_frappe_database(frappe_data)
        except Exception as e:
            print(
                f"Error retrieving data for {pair} on {exchange_name}: {e}")

    async def fetch_klines_with_rate_limit(self, session, exchange, pair):
        @exchange.rateLimit
        async def fetch_klines():
            return await session.get(f"{exchange.urls['api']}v1/klines", params={
                "pair": pair,
                "interval": '1d',
                "limit": 100
            })

        response = await fetch_klines()
        klines = await response.json()
        return klines

    def format_data_for_frappe(self, klines, pair, exchange_name):
        data_points = []
        for kline in klines:
            timestamp = kline[0]
            open_price = kline[1]
            high_price = kline[2]
            low_price = kline[3]
            close_price = kline[4]
            volume = kline[5]

            data_points.append({
                "pair": pair,
                "exchange": exchange_name,
                "time": timestamp,
                "open": open_price,
                "high": high_price,
                "low": low_price,
                "close": close_price,
                "volume": volume
            })

        return data_points

    async def store_data_in_frappe_database(self, frappe_data):
        for data_point in frappe_data:
            doc = frappe.get_doc({
                "doctype": "Kline Data",
                "pair": data_point["pair"],
                "exchange": data_point["exchange"],
                "time": data_point["time"],
                "open": data_point["open"],
                "high": data_point["high"],
                "low": data_point["low"],
                "close": data_point["close"],
                "volume": data_point["volume"]
            })
            doc.insert()

# Usage example (same as before)
exchanges = frappe.get_list("Exchange", filters={"enabled": 1})
pairs = frappe.get_list("Pair", filters={"enabled": 1})

data_feed = DataFeed(exchanges, pairs)

asyncio.run(data_feed.fetch_and_store_data())
