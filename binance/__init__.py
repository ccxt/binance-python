import sys
import binance.ccxt as ccxt_module
sys.modules['ccxt'] = ccxt_module

from binance.ccxt import binance as BinanceSync
from binance.ccxt.async_support.binance import binance as BinanceAsync
from binance.ccxt.pro.binance import binance as BinanceWs
