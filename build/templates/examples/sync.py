import os
import sys

root = os.path.dirname(os.path.dirname((os.path.abspath(__file__))))
sys.path.append(root + '/')

from __exchangeName__ import __ExchangeName__Sync


def main():
    instance = __ExchangeName__Sync({})
    instance.load_markets()
    symbol = "__TEST_SYMBOL__"

    # fetch ticker
    #
    ticker = instance.fetch_ticker(symbol)
    print(ticker)

    # fetch ohlcv
    #
    ohlcv = instance.fetch_ohlcv(symbol, "1m")
    print(ohlcv)


main()

