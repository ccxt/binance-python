# __exchangeName__-python
Python SDK (sync and async) for __ExchangeName__ with Rest and WS capabilities.

You can check __ExchangeName__'s docs here: [Docs](__LINK_TO_OFFICIAL_EXCHANGE_DOCS__)


You can check the SDK docs here: [SDK](https://docs.ccxt.com/#/exchanges/__exchangeName__)

*This package derives from CCXT and allows you to call pretty much every endpoint by either using the unified CCXT API or calling the endpoints directly*

## Installation

```
pip install __PYTHON_PACKAGE_NAME__
```

## Usage

### Async

```Python
from __PYTHON_PACKAGE_KEY__ import __ExchangeName__Async

async def main():
    instance = __ExchangeName__Async({})
    order = await instance.create_order(__EXAMPLE_SYMBOL__, "limit", "buy", 1, 100000)
```

### Sync

```Python
from __PYTHON_PACKAGE_KEY__ import __ExchangeName__Sync

def main():
    instance = __ExchangeName__Sync({})
    order =  instance.create_order(__EXAMPLE_SYMBOL__, "limit", "buy", 1, 100000)
```

### Websockets

```Python
from __PYTHON_PACKAGE_KEY__ import __ExchangeName__Ws

async def main():
    instance = __ExchangeName__Ws({})
    while True:
        orders = await instance.watch_orders(__EXAMPLE_SYMBOL__)
```

