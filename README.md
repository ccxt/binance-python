# binance-python
Python SDK (sync and async) for Binance with Rest and WS capabilities.

You can check Binance's docs here: [Docs](https://ccxt.com)


You can check the SDK docs here: [SDK](https://docs.ccxt.com/#/exchanges/binance)

*This package derives from CCXT and allows you to call pretty much every endpoint by either using the unified CCXT API or calling the endpoints directly*

## Installation

```
pip install binance
```

## Usage

### Async

```Python
from binance import BinanceAsync

async def main():
    instance = BinanceAsync({})
    order = await instance.create_order(__EXAMPLE_SYMBOL__, "limit", "buy", 1, 100000)
```

### Sync

```Python
from binance import BinanceSync

def main():
    instance = BinanceSync({})
    order =  instance.create_order(__EXAMPLE_SYMBOL__, "limit", "buy", 1, 100000)
```

### Websockets

```Python
from binance import BinanceWs

async def main():
    instance = BinanceWs({})
    while True:
        orders = await instance.watch_orders(__EXAMPLE_SYMBOL__)
```

