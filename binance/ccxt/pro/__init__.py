import sys
import binance.ccxt as ccxt_module
sys.modules['ccxt'] = ccxt_module

# -*- coding: utf-8 -*-

"""CCXT: CryptoCurrency eXchange Trading Library (Async)"""

# ----------------------------------------------------------------------------

__version__ = '4.4.75'

# ----------------------------------------------------------------------------

from ccxt.async_support.base.exchange import Exchange  # noqa: F401

# CCXT Pro exchanges (now this is mainly used for importing exchanges in WS tests)

from ccxt.pro.binance import binance                                      # noqa: F401

exchanges = [    'binance',]
