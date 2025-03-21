import os
import sys
import asyncio

root = os.path.dirname(os.path.dirname((os.path.abspath(__file__))))
sys.path.append(root + '/')

from __exchangeName__ import __ExchangeName__Async

# ********** on Windows, uncomment below ********** 
# if sys.platform == 'win32':
# 	asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

async def main():
    instance = __ExchangeName__Async({})
    await instance.load_markets()
    symbol = "__EXAMPLE_SYMBOL__"

    # fetch ticker
    #
    ticker = await instance.fetch_ticker(symbol)
    print(ticker)

    # fetch ohlcv
    #
    ohlcv = await instance.fetch_ohlcv(symbol, "1m")
    print(ohlcv)

    # close after you finish
    await instance.close()

asyncio.run(main())

