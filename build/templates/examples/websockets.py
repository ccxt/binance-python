import os
import sys
import asyncio

root = os.path.dirname(os.path.dirname((os.path.abspath(__file__))))
sys.path.append(root + '/')

from __exchangeName__ import __ExchangeName__Ws

# ********** on Windows, uncomment below ********** 
# if sys.platform == 'win32':
# 	asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())


async def my_watch_ticker_my(exchange, symbol):
    while (True):
        result = await exchange.watch_ticker(symbol)
        print(result)


async def my_watch_orderbook(exchange, symbol):
    while (True):
        result = await exchange.watch_order_book(symbol)
        print(result)




async def main():
    instance = __ExchangeName__Ws({})
    await instance.load_markets()
    symbol = "__EXAMPLE_SYMBOL__"

    # fetch ticker
    ticker = my_watch_ticker_my(instance, symbol)

    # fetch orderbook
    ob = my_watch_orderbook(instance, symbol)
   
    await asyncio.gather(ticker, ob)

    # close after you finish
    await instance.close()




asyncio.run(main())

