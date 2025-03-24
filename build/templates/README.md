# __exchangeName__-python
Python SDK (sync and async) for __ExchangeName__ cryptocurrency exchange with Rest and WS capabilities.

You can check the SDK docs here: [SDK](https://docs.ccxt.com/#/exchanges/__exchangeName__)
You can check __ExchangeName__'s docs here: [Docs](__LINK_TO_OFFICIAL_EXCHANGE_DOCS__)


## Installation

```
pip install __PYTHON_PACKAGE_NAME__
```

## Usage

### Sync

```Python
from __exchangeName__ import __ExchangeName__Sync

def main():
    instance = __ExchangeName__Sync({})
    ob =  instance.fetch_order_book("__EXAMPLE_SYMBOL__")
    print(ob)
    #
    # balance = instance.fetch_balance()
    # order = instance.create_order("__EXAMPLE_SYMBOL__", "limit", "buy", 1, 100000)
```

### Async

```Python
import asyncio
from __exchangeName__ import __ExchangeName__Async

async def main():
    instance = __ExchangeName__Async({})
    ob =  await instance.fetch_order_book("__EXAMPLE_SYMBOL__")
    print(ob)
    #
    # balance = await instance.fetch_balance()
    # order = await instance.create_order("__EXAMPLE_SYMBOL__", "limit", "buy", 1, 100000)

asyncio.run(main())
```



### Websockets

```Python
from __exchangeName__ import __ExchangeName__Ws

async def main():
    instance = __ExchangeName__Ws({})
    while True:
        ob = await instance.watch_order_book("__EXAMPLE_SYMBOL__")
        print(ob)
        # orders = await instance.watch_orders("__EXAMPLE_SYMBOL__")
```





#### Raw call

You can also construct custom requests to available "implicit" endpoints

```Python
        request = {
            'type': 'candleSnapshot',
            'req': {
                'coin': coin,
                'interval': tf,
                'startTime': since,
                'endTime': until,
            },
        }
        response = await instance.public_post_info(request)
```




## Available methods

### REST Unified

- `create_order(self, symbol: str, type: OrderType, side: OrderSide, amount: float, price: Num = None, params={})`
- `create_orders_request(self, orders, params={})`
- `create_orders(self, orders: List[OrderRequest], params={})`
- `fetch_balance(self, params={})`
- `fetch_canceled_and_closed_orders(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_canceled_orders(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_closed_orders(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_currencies(self, params={})`
- `fetch_deposits(self, code: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_funding_history(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_funding_rate_history(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_funding_rates(self, symbols: Strings = None, params={})`
- `fetch_ledger(self, code: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_markets(self, params={})`
- `fetch_my_trades(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_ohlcv(self, symbol: str, timeframe='1m', since: Int = None, limit: Int = None, params={})`
- `fetch_open_interest(self, symbol: str, params={})`
- `fetch_open_interests(self, symbols: Strings = None, params={})`
- `fetch_open_orders(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_order_book(self, symbol: str, limit: Int = None, params={})`
- `fetch_order(self, id: str, symbol: Str = None, params={})`
- `fetch_orders(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_position(self, symbol: str, params={})`
- `fetch_positions(self, symbols: Strings = None, params={})`
- `fetch_spot_markets(self, params={})`
- `fetch_swap_markets(self, params={})`
- `fetch_tickers(self, symbols: Strings = None, params={})`
- `fetch_trades(self, symbol: Str, since: Int = None, limit: Int = None, params={})`
- `fetch_trading_fee(self, symbol: str, params={})`
- `fetch_withdrawals(self, code: Str = None, since: Int = None, limit: Int = None, params={})`
- `action_hash(self, action, vaultAddress, nonce)`
- `add_margin(self, symbol: str, amount: float, params={})`
- `amount_to_precision(self, symbol, amount)`
- `build_usd_class_send_sig(self, message)`
- `build_usd_send_sig(self, message)`
- `build_withdraw_sig(self, message)`
- `calculate_price_precision(self, price: float, amountPrecision: float, maxDecimals: float)`
- `calculate_rate_limiter_cost(self, api, method, path, params, config={})`
- `cancel_all_orders_after(self, timeout: Int, params={})`
- `cancel_order(self, id: str, symbol: Str = None, params={})`
- `cancel_orders_for_symbols(self, orders: List[CancellationRequest], params={})`
- `cancel_orders(self, ids: List[str], symbol: Str = None, params={})`
- `coin_to_market_id(self, coin: Str)`
- `construct_phantom_agent(self, hash, isTestnet=True)`
- `describe(self)`
- `edit_order(self, id: str, symbol: str, type: str, side: str, amount: Num = None, price: Num = None, params={})`
- `edit_orders_request(self, orders, params={})`
- `edit_orders(self, orders: List[OrderRequest], params={})`
- `extract_type_from_delta(self, data=[])`
- `format_vault_address(self, address: Str = None)`
- `hash_message(self, message)`
- `modify_margin_helper(self, symbol: str, amount, type, params={})`
- `price_to_precision(self, symbol: str, price)`
- `reduce_margin(self, symbol: str, amount: float, params={})`
- `set_leverage(self, leverage: Int, symbol: Str = None, params={})`
- `set_margin_mode(self, marginMode: str, symbol: Str = None, params={})`
- `set_sandbox_mode(self, enabled)`
- `transfer(self, code: str, amount: float, fromAccount: str, toAccount: str, params={})`
- `withdraw(self, code: str, amount: float, address: str, tag=None, params={})`

### REST Raw

- `public_post_info(request)`
- `private_post_exchange(request)`

### WS Unified

- `describe(self)`
- `create_orders_ws(self, orders: List[OrderRequest], params={})`
- `create_order_ws(self, symbol: str, type: OrderType, side: OrderSide, amount: float, price: Num = None, params={})`
- `edit_order_ws(self, id: str, symbol: str, type: str, side: str, amount: Num = None, price: Num = None, params={})`
- `watch_order_book(self, symbol: str, limit: Int = None, params={})`
- `un_watch_order_book(self, symbol: str, params={})`
- `watch_ticker(self, symbol: str, params={})`
- `watch_tickers(self, symbols: Strings = None, params={})`
- `un_watch_tickers(self, symbols: Strings = None, params={})`
- `watch_my_trades(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `watch_trades(self, symbol: str, since: Int = None, limit: Int = None, params={})`
- `un_watch_trades(self, symbol: str, params={})`
- `watch_ohlcv(self, symbol: str, timeframe='1m', since: Int = None, limit: Int = None, params={})`
- `un_watch_ohlcv(self, symbol: str, timeframe='1m', params={})`
- `watch_orders(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `wrap_as_post_action(self, request: dict)`



## Contribution
- Give us a star :star:
- Fork and Clone! Awesome
- Select existing issues or create a new issue.