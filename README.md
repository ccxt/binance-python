# binance-python
Python SDK (sync and async) for Binance cryptocurrency exchange with Rest and WS capabilities.

- You can check the SDK docs here: [SDK](https://docs.ccxt.com/#/exchanges/binance)
- You can check Binance's docs here: [Docs](https://www.google.com/search?q=google+binance+cryptocurrency+exchange+api+docs)
- Github repo: https://github.com/ccxt/binance-python
- Pypi package: https://pypi.org/project/binance


## Installation

```
pip install binance
```

## Usage

### Sync

```Python
from binance import BinanceSync

def main():
    instance = BinanceSync({})
    ob =  instance.fetch_order_book("BTC/USDC")
    print(ob)
    #
    # balance = instance.fetch_balance()
    # order = instance.create_order("BTC/USDC", "limit", "buy", 1, 100000)

main()
```

### Async

```Python
import sys
import asyncio
from binance import BinanceAsync

### on Windows, uncomment below:
# if sys.platform == 'win32':
# 	asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

async def main():
    instance = BinanceAsync({})
    ob =  await instance.fetch_order_book("BTC/USDC")
    print(ob)
    #
    # balance = await instance.fetch_balance()
    # order = await instance.create_order("BTC/USDC", "limit", "buy", 1, 100000)

    # once you are done with the exchange
    await instance.close()

asyncio.run(main())
```



### Websockets

```Python
import sys
from binance import BinanceWs

### on Windows, uncomment below:
# if sys.platform == 'win32':
# 	asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

async def main():
    instance = BinanceWs({})
    while True:
        ob = await instance.watch_order_book("BTC/USDC")
        print(ob)
        # orders = await instance.watch_orders("BTC/USDC")

    # once you are done with the exchange
    await instance.close()

asyncio.run(main())
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

- `create_convert_trade(self, id: str, fromCode: str, toCode: str, amount: Num = None, params={})`
- `create_expired_option_market(self, symbol: str)`
- `create_gift_code(self, code: str, amount, params={})`
- `create_market_buy_order_with_cost(self, symbol: str, cost: float, params={})`
- `create_market_order_with_cost(self, symbol: str, side: OrderSide, cost: float, params={})`
- `create_market_sell_order_with_cost(self, symbol: str, cost: float, params={})`
- `create_order_request(self, symbol: str, type: OrderType, side: OrderSide, amount: float, price: Num = None, params={})`
- `create_order(self, symbol: str, type: OrderType, side: OrderSide, amount: float, price: Num = None, params={})`
- `create_orders(self, orders: List[OrderRequest], params={})`
- `fetch_account_positions(self, symbols: Strings = None, params={})`
- `fetch_all_greeks(self, symbols: Strings = None, params={})`
- `fetch_balance(self, params={})`
- `fetch_bids_asks(self, symbols: Strings = None, params={})`
- `fetch_borrow_interest(self, code: Str = None, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_borrow_rate_history(self, code: str, since: Int = None, limit: Int = None, params={})`
- `fetch_canceled_and_closed_orders(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_canceled_orders(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_closed_orders(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_convert_currencies(self, params={})`
- `fetch_convert_quote(self, fromCode: str, toCode: str, amount: Num = None, params={})`
- `fetch_convert_trade_history(self, code: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_convert_trade(self, id: str, code: Str = None, params={})`
- `fetch_cross_borrow_rate(self, code: str, params={})`
- `fetch_currencies(self, params={})`
- `fetch_deposit_address(self, code: str, params={})`
- `fetch_deposit_withdraw_fees(self, codes: Strings = None, params={})`
- `fetch_deposits(self, code: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_funding_history(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_funding_intervals(self, symbols: Strings = None, params={})`
- `fetch_funding_rate_history(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_funding_rate(self, symbol: str, params={})`
- `fetch_funding_rates(self, symbols: Strings = None, params={})`
- `fetch_greeks(self, symbol: str, params={})`
- `fetch_isolated_borrow_rate(self, symbol: str, params={})`
- `fetch_isolated_borrow_rates(self, params={})`
- `fetch_last_prices(self, symbols: Strings = None, params={})`
- `fetch_ledger_entry(self, id: str, code: Str = None, params={})`
- `fetch_ledger(self, code: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_leverage_tiers(self, symbols: Strings = None, params={})`
- `fetch_leverages(self, symbols: Strings = None, params={})`
- `fetch_long_short_ratio_history(self, symbol: Str = None, timeframe: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_margin_adjustment_history(self, symbol: Str = None, type: Str = None, since: Num = None, limit: Num = None, params={})`
- `fetch_margin_mode(self, symbol: str, params={})`
- `fetch_margin_modes(self, symbols: Strings = None, params={})`
- `fetch_mark_price(self, symbol: str, params={})`
- `fetch_mark_prices(self, symbols: Strings = None, params={})`
- `fetch_markets(self, params={})`
- `fetch_my_dust_trades(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_my_liquidations(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_my_settlement_history(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_my_trades(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_ohlcv(self, symbol: str, timeframe='1m', since: Int = None, limit: Int = None, params={})`
- `fetch_open_interest_history(self, symbol: str, timeframe='5m', since: Int = None, limit: Int = None, params={})`
- `fetch_open_interest(self, symbol: str, params={})`
- `fetch_open_order(self, id: str, symbol: Str = None, params={})`
- `fetch_open_orders(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_option_positions(self, symbols: Strings = None, params={})`
- `fetch_option(self, symbol: str, params={})`
- `fetch_order_book(self, symbol: str, limit: Int = None, params={})`
- `fetch_order_trades(self, id: str, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_order(self, id: str, symbol: Str = None, params={})`
- `fetch_orders(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_position_mode(self, symbol: Str = None, params={})`
- `fetch_position(self, symbol: str, params={})`
- `fetch_positions_risk(self, symbols: Strings = None, params={})`
- `fetch_positions(self, symbols: Strings = None, params={})`
- `fetch_settlement_history(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_status(self, params={})`
- `fetch_ticker(self, symbol: str, params={})`
- `fetch_tickers(self, symbols: Strings = None, params={})`
- `fetch_time(self, params={})`
- `fetch_trades(self, symbol: str, since: Int = None, limit: Int = None, params={})`
- `fetch_trading_fee(self, symbol: str, params={})`
- `fetch_trading_fees(self, params={})`
- `fetch_trading_limits(self, symbols: Strings = None, params={})`
- `fetch_transaction_fees(self, codes: Strings = None, params={})`
- `fetch_transfers(self, code: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_withdrawals(self, code: Str = None, since: Int = None, limit: Int = None, params={})`
- `add_margin(self, symbol: str, amount: float, params={})`
- `borrow_cross_margin(self, code: str, amount: float, params={})`
- `borrow_isolated_margin(self, symbol: str, code: str, amount: float, params={})`
- `calculate_rate_limiter_cost(self, api, method, path, params, config={})`
- `cancel_all_orders(self, symbol: Str = None, params={})`
- `cancel_order(self, id: str, symbol: Str = None, params={})`
- `cancel_orders(self, ids: List[str], symbol: Str = None, params={})`
- `cost_to_precision(self, symbol, cost)`
- `currency_to_precision(self, code, fee, networkCode=None)`
- `describe(self)`
- `edit_contract_order_request(self, id: str, symbol: str, type: OrderType, side: OrderSide, amount: float, price: Num = None, params={})`
- `edit_contract_order(self, id: str, symbol: str, type: OrderType, side: OrderSide, amount: float, price: Num = None, params={})`
- `edit_order(self, id: str, symbol: str, type: OrderType, side: OrderSide, amount: Num = None, price: Num = None, params={})`
- `edit_orders(self, orders: List[OrderRequest], params={})`
- `edit_spot_order_request(self, id: str, symbol: str, type: OrderType, side: OrderSide, amount: float, price: Num = None, params={})`
- `edit_spot_order(self, id: str, symbol: str, type: OrderType, side: OrderSide, amount: float, price: Num = None, params={})`
- `futures_transfer(self, code: str, amount, type, params={})`
- `get_base_domain_from_url(self, url: Str)`
- `get_exceptions_by_url(self, url: str, exactOrBroad: str)`
- `get_network_code_by_network_url(self, currencyCode: str, depositUrl: Str = None)`
- `is_inverse(self, type: str, subType: Str = None)`
- `is_linear(self, type: str, subType: Str = None)`
- `market(self, symbol: str)`
- `modify_margin_helper(self, symbol: str, amount, addOrReduce, params={})`
- `nonce(self)`
- `redeem_gift_code(self, giftcardCode, params={})`
- `reduce_margin(self, symbol: str, amount: float, params={})`
- `repay_cross_margin(self, code: str, amount, params={})`
- `repay_isolated_margin(self, symbol: str, code: str, amount, params={})`
- `request(self, path, api='public', method='GET', params={}, headers=None, body=None, config={})`
- `safe_market(self, marketId: Str = None, market: Market = None, delimiter: Str = None, marketType: Str = None)`
- `set_leverage(self, leverage: Int, symbol: Str = None, params={})`
- `set_margin_mode(self, marginMode: str, symbol: Str = None, params={})`
- `set_position_mode(self, hedged: bool, symbol: Str = None, params={})`
- `set_sandbox_mode(self, enable: bool)`
- `transfer(self, code: str, amount: float, fromAccount: str, toAccount: str, params={})`
- `verify_gift_code(self, id: str, params={})`
- `withdraw(self, code: str, amount: float, address: str, tag=None, params={})`

### REST Raw

- `sapi_get_copytrading_futures_userstatus(request)`
- `sapi_get_copytrading_futures_leadsymbol(request)`
- `sapi_get_system_status(request)`
- `sapi_get_accountsnapshot(request)`
- `sapi_get_account_info(request)`
- `sapi_get_margin_asset(request)`
- `sapi_get_margin_pair(request)`
- `sapi_get_margin_allassets(request)`
- `sapi_get_margin_allpairs(request)`
- `sapi_get_margin_priceindex(request)`
- `sapi_get_spot_delist_schedule(request)`
- `sapi_get_asset_assetdividend(request)`
- `sapi_get_asset_dribblet(request)`
- `sapi_get_asset_transfer(request)`
- `sapi_get_asset_assetdetail(request)`
- `sapi_get_asset_tradefee(request)`
- `sapi_get_asset_ledger_transfer_cloud_mining_querybypage(request)`
- `sapi_get_asset_convert_transfer_querybypage(request)`
- `sapi_get_asset_wallet_balance(request)`
- `sapi_get_asset_custody_transfer_history(request)`
- `sapi_get_margin_borrow_repay(request)`
- `sapi_get_margin_loan(request)`
- `sapi_get_margin_repay(request)`
- `sapi_get_margin_account(request)`
- `sapi_get_margin_transfer(request)`
- `sapi_get_margin_interesthistory(request)`
- `sapi_get_margin_forceliquidationrec(request)`
- `sapi_get_margin_order(request)`
- `sapi_get_margin_openorders(request)`
- `sapi_get_margin_allorders(request)`
- `sapi_get_margin_mytrades(request)`
- `sapi_get_margin_maxborrowable(request)`
- `sapi_get_margin_maxtransferable(request)`
- `sapi_get_margin_tradecoeff(request)`
- `sapi_get_margin_isolated_transfer(request)`
- `sapi_get_margin_isolated_account(request)`
- `sapi_get_margin_isolated_pair(request)`
- `sapi_get_margin_isolated_allpairs(request)`
- `sapi_get_margin_isolated_accountlimit(request)`
- `sapi_get_margin_interestratehistory(request)`
- `sapi_get_margin_orderlist(request)`
- `sapi_get_margin_allorderlist(request)`
- `sapi_get_margin_openorderlist(request)`
- `sapi_get_margin_crossmargindata(request)`
- `sapi_get_margin_isolatedmargindata(request)`
- `sapi_get_margin_isolatedmargintier(request)`
- `sapi_get_margin_ratelimit_order(request)`
- `sapi_get_margin_dribblet(request)`
- `sapi_get_margin_dust(request)`
- `sapi_get_margin_crossmargincollateralratio(request)`
- `sapi_get_margin_exchange_small_liability(request)`
- `sapi_get_margin_exchange_small_liability_history(request)`
- `sapi_get_margin_next_hourly_interest_rate(request)`
- `sapi_get_margin_capital_flow(request)`
- `sapi_get_margin_delist_schedule(request)`
- `sapi_get_margin_available_inventory(request)`
- `sapi_get_margin_leveragebracket(request)`
- `sapi_get_loan_vip_loanable_data(request)`
- `sapi_get_loan_vip_collateral_data(request)`
- `sapi_get_loan_vip_request_data(request)`
- `sapi_get_loan_vip_request_interestrate(request)`
- `sapi_get_loan_income(request)`
- `sapi_get_loan_ongoing_orders(request)`
- `sapi_get_loan_ltv_adjustment_history(request)`
- `sapi_get_loan_borrow_history(request)`
- `sapi_get_loan_repay_history(request)`
- `sapi_get_loan_loanable_data(request)`
- `sapi_get_loan_collateral_data(request)`
- `sapi_get_loan_repay_collateral_rate(request)`
- `sapi_get_loan_flexible_ongoing_orders(request)`
- `sapi_get_loan_flexible_borrow_history(request)`
- `sapi_get_loan_flexible_repay_history(request)`
- `sapi_get_loan_flexible_ltv_adjustment_history(request)`
- `sapi_get_loan_vip_ongoing_orders(request)`
- `sapi_get_loan_vip_repay_history(request)`
- `sapi_get_loan_vip_collateral_account(request)`
- `sapi_get_fiat_orders(request)`
- `sapi_get_fiat_payments(request)`
- `sapi_get_futures_transfer(request)`
- `sapi_get_futures_histdatalink(request)`
- `sapi_get_rebate_taxquery(request)`
- `sapi_get_capital_config_getall(request)`
- `sapi_get_capital_deposit_address(request)`
- `sapi_get_capital_deposit_address_list(request)`
- `sapi_get_capital_deposit_hisrec(request)`
- `sapi_get_capital_deposit_subaddress(request)`
- `sapi_get_capital_deposit_subhisrec(request)`
- `sapi_get_capital_withdraw_history(request)`
- `sapi_get_capital_withdraw_address_list(request)`
- `sapi_get_capital_contract_convertible_coins(request)`
- `sapi_get_convert_tradeflow(request)`
- `sapi_get_convert_exchangeinfo(request)`
- `sapi_get_convert_assetinfo(request)`
- `sapi_get_convert_orderstatus(request)`
- `sapi_get_convert_limit_queryopenorders(request)`
- `sapi_get_account_status(request)`
- `sapi_get_account_apitradingstatus(request)`
- `sapi_get_account_apirestrictions_iprestriction(request)`
- `sapi_get_bnbburn(request)`
- `sapi_get_sub_account_futures_account(request)`
- `sapi_get_sub_account_futures_accountsummary(request)`
- `sapi_get_sub_account_futures_positionrisk(request)`
- `sapi_get_sub_account_futures_internaltransfer(request)`
- `sapi_get_sub_account_list(request)`
- `sapi_get_sub_account_margin_account(request)`
- `sapi_get_sub_account_margin_accountsummary(request)`
- `sapi_get_sub_account_spotsummary(request)`
- `sapi_get_sub_account_status(request)`
- `sapi_get_sub_account_sub_transfer_history(request)`
- `sapi_get_sub_account_transfer_subuserhistory(request)`
- `sapi_get_sub_account_universaltransfer(request)`
- `sapi_get_sub_account_apirestrictions_iprestriction_thirdpartylist(request)`
- `sapi_get_sub_account_transaction_statistics(request)`
- `sapi_get_sub_account_subaccountapi_iprestriction(request)`
- `sapi_get_managed_subaccount_asset(request)`
- `sapi_get_managed_subaccount_accountsnapshot(request)`
- `sapi_get_managed_subaccount_querytranslogforinvestor(request)`
- `sapi_get_managed_subaccount_querytranslogfortradeparent(request)`
- `sapi_get_managed_subaccount_fetch_future_asset(request)`
- `sapi_get_managed_subaccount_marginasset(request)`
- `sapi_get_managed_subaccount_info(request)`
- `sapi_get_managed_subaccount_deposit_address(request)`
- `sapi_get_managed_subaccount_query_trans_log(request)`
- `sapi_get_lending_daily_product_list(request)`
- `sapi_get_lending_daily_userleftquota(request)`
- `sapi_get_lending_daily_userredemptionquota(request)`
- `sapi_get_lending_daily_token_position(request)`
- `sapi_get_lending_union_account(request)`
- `sapi_get_lending_union_purchaserecord(request)`
- `sapi_get_lending_union_redemptionrecord(request)`
- `sapi_get_lending_union_interesthistory(request)`
- `sapi_get_lending_project_list(request)`
- `sapi_get_lending_project_position_list(request)`
- `sapi_get_eth_staking_eth_history_stakinghistory(request)`
- `sapi_get_eth_staking_eth_history_redemptionhistory(request)`
- `sapi_get_eth_staking_eth_history_rewardshistory(request)`
- `sapi_get_eth_staking_eth_quota(request)`
- `sapi_get_eth_staking_eth_history_ratehistory(request)`
- `sapi_get_eth_staking_account(request)`
- `sapi_get_eth_staking_wbeth_history_wraphistory(request)`
- `sapi_get_eth_staking_wbeth_history_unwraphistory(request)`
- `sapi_get_eth_staking_eth_history_wbethrewardshistory(request)`
- `sapi_get_sol_staking_sol_history_stakinghistory(request)`
- `sapi_get_sol_staking_sol_history_redemptionhistory(request)`
- `sapi_get_sol_staking_sol_history_bnsolrewardshistory(request)`
- `sapi_get_sol_staking_sol_history_ratehistory(request)`
- `sapi_get_sol_staking_account(request)`
- `sapi_get_sol_staking_sol_quota(request)`
- `sapi_get_mining_pub_algolist(request)`
- `sapi_get_mining_pub_coinlist(request)`
- `sapi_get_mining_worker_detail(request)`
- `sapi_get_mining_worker_list(request)`
- `sapi_get_mining_payment_list(request)`
- `sapi_get_mining_statistics_user_status(request)`
- `sapi_get_mining_statistics_user_list(request)`
- `sapi_get_mining_payment_uid(request)`
- `sapi_get_bswap_pools(request)`
- `sapi_get_bswap_liquidity(request)`
- `sapi_get_bswap_liquidityops(request)`
- `sapi_get_bswap_quote(request)`
- `sapi_get_bswap_swap(request)`
- `sapi_get_bswap_poolconfigure(request)`
- `sapi_get_bswap_addliquiditypreview(request)`
- `sapi_get_bswap_removeliquiditypreview(request)`
- `sapi_get_bswap_unclaimedrewards(request)`
- `sapi_get_bswap_claimedhistory(request)`
- `sapi_get_blvt_tokeninfo(request)`
- `sapi_get_blvt_subscribe_record(request)`
- `sapi_get_blvt_redeem_record(request)`
- `sapi_get_blvt_userlimit(request)`
- `sapi_get_apireferral_ifnewuser(request)`
- `sapi_get_apireferral_customization(request)`
- `sapi_get_apireferral_usercustomization(request)`
- `sapi_get_apireferral_rebate_recentrecord(request)`
- `sapi_get_apireferral_rebate_historicalrecord(request)`
- `sapi_get_apireferral_kickback_recentrecord(request)`
- `sapi_get_apireferral_kickback_historicalrecord(request)`
- `sapi_get_broker_subaccountapi(request)`
- `sapi_get_broker_subaccount(request)`
- `sapi_get_broker_subaccountapi_commission_futures(request)`
- `sapi_get_broker_subaccountapi_commission_coinfutures(request)`
- `sapi_get_broker_info(request)`
- `sapi_get_broker_transfer(request)`
- `sapi_get_broker_transfer_futures(request)`
- `sapi_get_broker_rebate_recentrecord(request)`
- `sapi_get_broker_rebate_historicalrecord(request)`
- `sapi_get_broker_subaccount_bnbburn_status(request)`
- `sapi_get_broker_subaccount_deposithist(request)`
- `sapi_get_broker_subaccount_spotsummary(request)`
- `sapi_get_broker_subaccount_marginsummary(request)`
- `sapi_get_broker_subaccount_futuressummary(request)`
- `sapi_get_broker_rebate_futures_recentrecord(request)`
- `sapi_get_broker_subaccountapi_iprestriction(request)`
- `sapi_get_broker_universaltransfer(request)`
- `sapi_get_account_apirestrictions(request)`
- `sapi_get_c2c_ordermatch_listuserorderhistory(request)`
- `sapi_get_nft_history_transactions(request)`
- `sapi_get_nft_history_deposit(request)`
- `sapi_get_nft_history_withdraw(request)`
- `sapi_get_nft_user_getasset(request)`
- `sapi_get_pay_transactions(request)`
- `sapi_get_giftcard_verify(request)`
- `sapi_get_giftcard_cryptography_rsa_public_key(request)`
- `sapi_get_giftcard_buycode_token_limit(request)`
- `sapi_get_algo_spot_openorders(request)`
- `sapi_get_algo_spot_historicalorders(request)`
- `sapi_get_algo_spot_suborders(request)`
- `sapi_get_algo_futures_openorders(request)`
- `sapi_get_algo_futures_historicalorders(request)`
- `sapi_get_algo_futures_suborders(request)`
- `sapi_get_portfolio_account(request)`
- `sapi_get_portfolio_collateralrate(request)`
- `sapi_get_portfolio_pmloan(request)`
- `sapi_get_portfolio_interest_history(request)`
- `sapi_get_portfolio_asset_index_price(request)`
- `sapi_get_portfolio_repay_futures_switch(request)`
- `sapi_get_portfolio_margin_asset_leverage(request)`
- `sapi_get_portfolio_balance(request)`
- `sapi_get_portfolio_negative_balance_exchange_record(request)`
- `sapi_get_portfolio_pmloan_history(request)`
- `sapi_get_staking_productlist(request)`
- `sapi_get_staking_position(request)`
- `sapi_get_staking_stakingrecord(request)`
- `sapi_get_staking_personalleftquota(request)`
- `sapi_get_lending_auto_invest_target_asset_list(request)`
- `sapi_get_lending_auto_invest_target_asset_roi_list(request)`
- `sapi_get_lending_auto_invest_all_asset(request)`
- `sapi_get_lending_auto_invest_source_asset_list(request)`
- `sapi_get_lending_auto_invest_plan_list(request)`
- `sapi_get_lending_auto_invest_plan_id(request)`
- `sapi_get_lending_auto_invest_history_list(request)`
- `sapi_get_lending_auto_invest_index_info(request)`
- `sapi_get_lending_auto_invest_index_user_summary(request)`
- `sapi_get_lending_auto_invest_one_off_status(request)`
- `sapi_get_lending_auto_invest_redeem_history(request)`
- `sapi_get_lending_auto_invest_rebalance_history(request)`
- `sapi_get_simple_earn_flexible_list(request)`
- `sapi_get_simple_earn_locked_list(request)`
- `sapi_get_simple_earn_flexible_personalleftquota(request)`
- `sapi_get_simple_earn_locked_personalleftquota(request)`
- `sapi_get_simple_earn_flexible_subscriptionpreview(request)`
- `sapi_get_simple_earn_locked_subscriptionpreview(request)`
- `sapi_get_simple_earn_flexible_history_ratehistory(request)`
- `sapi_get_simple_earn_flexible_position(request)`
- `sapi_get_simple_earn_locked_position(request)`
- `sapi_get_simple_earn_account(request)`
- `sapi_get_simple_earn_flexible_history_subscriptionrecord(request)`
- `sapi_get_simple_earn_locked_history_subscriptionrecord(request)`
- `sapi_get_simple_earn_flexible_history_redemptionrecord(request)`
- `sapi_get_simple_earn_locked_history_redemptionrecord(request)`
- `sapi_get_simple_earn_flexible_history_rewardsrecord(request)`
- `sapi_get_simple_earn_locked_history_rewardsrecord(request)`
- `sapi_get_simple_earn_flexible_history_collateralrecord(request)`
- `sapi_get_dci_product_list(request)`
- `sapi_get_dci_product_positions(request)`
- `sapi_get_dci_product_accounts(request)`
- `sapi_post_asset_dust(request)`
- `sapi_post_asset_dust_btc(request)`
- `sapi_post_asset_transfer(request)`
- `sapi_post_asset_get_funding_asset(request)`
- `sapi_post_asset_convert_transfer(request)`
- `sapi_post_account_disablefastwithdrawswitch(request)`
- `sapi_post_account_enablefastwithdrawswitch(request)`
- `sapi_post_capital_withdraw_apply(request)`
- `sapi_post_capital_contract_convertible_coins(request)`
- `sapi_post_capital_deposit_credit_apply(request)`
- `sapi_post_margin_borrow_repay(request)`
- `sapi_post_margin_transfer(request)`
- `sapi_post_margin_loan(request)`
- `sapi_post_margin_repay(request)`
- `sapi_post_margin_order(request)`
- `sapi_post_margin_order_oco(request)`
- `sapi_post_margin_dust(request)`
- `sapi_post_margin_exchange_small_liability(request)`
- `sapi_post_margin_isolated_transfer(request)`
- `sapi_post_margin_isolated_account(request)`
- `sapi_post_margin_max_leverage(request)`
- `sapi_post_bnbburn(request)`
- `sapi_post_sub_account_virtualsubaccount(request)`
- `sapi_post_sub_account_margin_transfer(request)`
- `sapi_post_sub_account_margin_enable(request)`
- `sapi_post_sub_account_futures_enable(request)`
- `sapi_post_sub_account_futures_transfer(request)`
- `sapi_post_sub_account_futures_internaltransfer(request)`
- `sapi_post_sub_account_transfer_subtosub(request)`
- `sapi_post_sub_account_transfer_subtomaster(request)`
- `sapi_post_sub_account_universaltransfer(request)`
- `sapi_post_sub_account_options_enable(request)`
- `sapi_post_managed_subaccount_deposit(request)`
- `sapi_post_managed_subaccount_withdraw(request)`
- `sapi_post_userdatastream(request)`
- `sapi_post_userdatastream_isolated(request)`
- `sapi_post_futures_transfer(request)`
- `sapi_post_lending_customizedfixed_purchase(request)`
- `sapi_post_lending_daily_purchase(request)`
- `sapi_post_lending_daily_redeem(request)`
- `sapi_post_bswap_liquidityadd(request)`
- `sapi_post_bswap_liquidityremove(request)`
- `sapi_post_bswap_swap(request)`
- `sapi_post_bswap_claimrewards(request)`
- `sapi_post_blvt_subscribe(request)`
- `sapi_post_blvt_redeem(request)`
- `sapi_post_apireferral_customization(request)`
- `sapi_post_apireferral_usercustomization(request)`
- `sapi_post_apireferral_rebate_historicalrecord(request)`
- `sapi_post_apireferral_kickback_historicalrecord(request)`
- `sapi_post_broker_subaccount(request)`
- `sapi_post_broker_subaccount_margin(request)`
- `sapi_post_broker_subaccount_futures(request)`
- `sapi_post_broker_subaccountapi(request)`
- `sapi_post_broker_subaccountapi_permission(request)`
- `sapi_post_broker_subaccountapi_commission(request)`
- `sapi_post_broker_subaccountapi_commission_futures(request)`
- `sapi_post_broker_subaccountapi_commission_coinfutures(request)`
- `sapi_post_broker_transfer(request)`
- `sapi_post_broker_transfer_futures(request)`
- `sapi_post_broker_rebate_historicalrecord(request)`
- `sapi_post_broker_subaccount_bnbburn_spot(request)`
- `sapi_post_broker_subaccount_bnbburn_margininterest(request)`
- `sapi_post_broker_subaccount_blvt(request)`
- `sapi_post_broker_subaccountapi_iprestriction(request)`
- `sapi_post_broker_subaccountapi_iprestriction_iplist(request)`
- `sapi_post_broker_universaltransfer(request)`
- `sapi_post_broker_subaccountapi_permission_universaltransfer(request)`
- `sapi_post_broker_subaccountapi_permission_vanillaoptions(request)`
- `sapi_post_giftcard_createcode(request)`
- `sapi_post_giftcard_redeemcode(request)`
- `sapi_post_giftcard_buycode(request)`
- `sapi_post_algo_spot_newordertwap(request)`
- `sapi_post_algo_futures_newordervp(request)`
- `sapi_post_algo_futures_newordertwap(request)`
- `sapi_post_staking_purchase(request)`
- `sapi_post_staking_redeem(request)`
- `sapi_post_staking_setautostaking(request)`
- `sapi_post_eth_staking_eth_stake(request)`
- `sapi_post_eth_staking_eth_redeem(request)`
- `sapi_post_eth_staking_wbeth_wrap(request)`
- `sapi_post_sol_staking_sol_stake(request)`
- `sapi_post_sol_staking_sol_redeem(request)`
- `sapi_post_mining_hash_transfer_config(request)`
- `sapi_post_mining_hash_transfer_config_cancel(request)`
- `sapi_post_portfolio_repay(request)`
- `sapi_post_loan_vip_renew(request)`
- `sapi_post_loan_vip_borrow(request)`
- `sapi_post_loan_borrow(request)`
- `sapi_post_loan_repay(request)`
- `sapi_post_loan_adjust_ltv(request)`
- `sapi_post_loan_customize_margin_call(request)`
- `sapi_post_loan_flexible_repay(request)`
- `sapi_post_loan_flexible_adjust_ltv(request)`
- `sapi_post_loan_vip_repay(request)`
- `sapi_post_convert_getquote(request)`
- `sapi_post_convert_acceptquote(request)`
- `sapi_post_convert_limit_placeorder(request)`
- `sapi_post_convert_limit_cancelorder(request)`
- `sapi_post_portfolio_auto_collection(request)`
- `sapi_post_portfolio_asset_collection(request)`
- `sapi_post_portfolio_bnb_transfer(request)`
- `sapi_post_portfolio_repay_futures_switch(request)`
- `sapi_post_portfolio_repay_futures_negative_balance(request)`
- `sapi_post_portfolio_mint(request)`
- `sapi_post_portfolio_redeem(request)`
- `sapi_post_lending_auto_invest_plan_add(request)`
- `sapi_post_lending_auto_invest_plan_edit(request)`
- `sapi_post_lending_auto_invest_plan_edit_status(request)`
- `sapi_post_lending_auto_invest_one_off(request)`
- `sapi_post_lending_auto_invest_redeem(request)`
- `sapi_post_simple_earn_flexible_subscribe(request)`
- `sapi_post_simple_earn_locked_subscribe(request)`
- `sapi_post_simple_earn_flexible_redeem(request)`
- `sapi_post_simple_earn_locked_redeem(request)`
- `sapi_post_simple_earn_flexible_setautosubscribe(request)`
- `sapi_post_simple_earn_locked_setautosubscribe(request)`
- `sapi_post_simple_earn_locked_setredeemoption(request)`
- `sapi_post_dci_product_subscribe(request)`
- `sapi_post_dci_product_auto_compound_edit(request)`
- `sapi_put_userdatastream(request)`
- `sapi_put_userdatastream_isolated(request)`
- `sapi_delete_margin_openorders(request)`
- `sapi_delete_margin_order(request)`
- `sapi_delete_margin_orderlist(request)`
- `sapi_delete_margin_isolated_account(request)`
- `sapi_delete_userdatastream(request)`
- `sapi_delete_userdatastream_isolated(request)`
- `sapi_delete_broker_subaccountapi(request)`
- `sapi_delete_broker_subaccountapi_iprestriction_iplist(request)`
- `sapi_delete_algo_spot_order(request)`
- `sapi_delete_algo_futures_order(request)`
- `sapi_delete_sub_account_subaccountapi_iprestriction_iplist(request)`
- `sapiv2_get_eth_staking_account(request)`
- `sapiv2_get_sub_account_futures_account(request)`
- `sapiv2_get_sub_account_futures_accountsummary(request)`
- `sapiv2_get_sub_account_futures_positionrisk(request)`
- `sapiv2_get_loan_flexible_ongoing_orders(request)`
- `sapiv2_get_loan_flexible_borrow_history(request)`
- `sapiv2_get_loan_flexible_repay_history(request)`
- `sapiv2_get_loan_flexible_ltv_adjustment_history(request)`
- `sapiv2_get_loan_flexible_loanable_data(request)`
- `sapiv2_get_loan_flexible_collateral_data(request)`
- `sapiv2_get_portfolio_account(request)`
- `sapiv2_post_eth_staking_eth_stake(request)`
- `sapiv2_post_sub_account_subaccountapi_iprestriction(request)`
- `sapiv2_post_loan_flexible_borrow(request)`
- `sapiv2_post_loan_flexible_repay(request)`
- `sapiv2_post_loan_flexible_adjust_ltv(request)`
- `sapiv3_get_sub_account_assets(request)`
- `sapiv3_post_asset_getuserasset(request)`
- `sapiv4_get_sub_account_assets(request)`
- `dapipublic_get_ping(request)`
- `dapipublic_get_time(request)`
- `dapipublic_get_exchangeinfo(request)`
- `dapipublic_get_depth(request)`
- `dapipublic_get_trades(request)`
- `dapipublic_get_historicaltrades(request)`
- `dapipublic_get_aggtrades(request)`
- `dapipublic_get_premiumindex(request)`
- `dapipublic_get_fundingrate(request)`
- `dapipublic_get_klines(request)`
- `dapipublic_get_continuousklines(request)`
- `dapipublic_get_indexpriceklines(request)`
- `dapipublic_get_markpriceklines(request)`
- `dapipublic_get_premiumindexklines(request)`
- `dapipublic_get_ticker_24hr(request)`
- `dapipublic_get_ticker_price(request)`
- `dapipublic_get_ticker_bookticker(request)`
- `dapipublic_get_constituents(request)`
- `dapipublic_get_openinterest(request)`
- `dapipublic_get_fundinginfo(request)`
- `dapidata_get_delivery_price(request)`
- `dapidata_get_openinteresthist(request)`
- `dapidata_get_toplongshortaccountratio(request)`
- `dapidata_get_toplongshortpositionratio(request)`
- `dapidata_get_globallongshortaccountratio(request)`
- `dapidata_get_takerbuysellvol(request)`
- `dapidata_get_basis(request)`
- `dapiprivate_get_positionside_dual(request)`
- `dapiprivate_get_orderamendment(request)`
- `dapiprivate_get_order(request)`
- `dapiprivate_get_openorder(request)`
- `dapiprivate_get_openorders(request)`
- `dapiprivate_get_allorders(request)`
- `dapiprivate_get_balance(request)`
- `dapiprivate_get_account(request)`
- `dapiprivate_get_positionmargin_history(request)`
- `dapiprivate_get_positionrisk(request)`
- `dapiprivate_get_usertrades(request)`
- `dapiprivate_get_income(request)`
- `dapiprivate_get_leveragebracket(request)`
- `dapiprivate_get_forceorders(request)`
- `dapiprivate_get_adlquantile(request)`
- `dapiprivate_get_commissionrate(request)`
- `dapiprivate_get_income_asyn(request)`
- `dapiprivate_get_income_asyn_id(request)`
- `dapiprivate_get_trade_asyn(request)`
- `dapiprivate_get_trade_asyn_id(request)`
- `dapiprivate_get_order_asyn(request)`
- `dapiprivate_get_order_asyn_id(request)`
- `dapiprivate_get_pmexchangeinfo(request)`
- `dapiprivate_get_pmaccountinfo(request)`
- `dapiprivate_post_positionside_dual(request)`
- `dapiprivate_post_order(request)`
- `dapiprivate_post_batchorders(request)`
- `dapiprivate_post_countdowncancelall(request)`
- `dapiprivate_post_leverage(request)`
- `dapiprivate_post_margintype(request)`
- `dapiprivate_post_positionmargin(request)`
- `dapiprivate_post_listenkey(request)`
- `dapiprivate_put_listenkey(request)`
- `dapiprivate_put_order(request)`
- `dapiprivate_put_batchorders(request)`
- `dapiprivate_delete_order(request)`
- `dapiprivate_delete_allopenorders(request)`
- `dapiprivate_delete_batchorders(request)`
- `dapiprivate_delete_listenkey(request)`
- `dapiprivatev2_get_leveragebracket(request)`
- `fapipublic_get_ping(request)`
- `fapipublic_get_time(request)`
- `fapipublic_get_exchangeinfo(request)`
- `fapipublic_get_depth(request)`
- `fapipublic_get_trades(request)`
- `fapipublic_get_historicaltrades(request)`
- `fapipublic_get_aggtrades(request)`
- `fapipublic_get_klines(request)`
- `fapipublic_get_continuousklines(request)`
- `fapipublic_get_markpriceklines(request)`
- `fapipublic_get_indexpriceklines(request)`
- `fapipublic_get_premiumindexklines(request)`
- `fapipublic_get_fundingrate(request)`
- `fapipublic_get_fundinginfo(request)`
- `fapipublic_get_premiumindex(request)`
- `fapipublic_get_ticker_24hr(request)`
- `fapipublic_get_ticker_price(request)`
- `fapipublic_get_ticker_bookticker(request)`
- `fapipublic_get_openinterest(request)`
- `fapipublic_get_indexinfo(request)`
- `fapipublic_get_assetindex(request)`
- `fapipublic_get_constituents(request)`
- `fapipublic_get_apitradingstatus(request)`
- `fapipublic_get_lvtklines(request)`
- `fapipublic_get_convert_exchangeinfo(request)`
- `fapidata_get_delivery_price(request)`
- `fapidata_get_openinteresthist(request)`
- `fapidata_get_toplongshortaccountratio(request)`
- `fapidata_get_toplongshortpositionratio(request)`
- `fapidata_get_globallongshortaccountratio(request)`
- `fapidata_get_takerlongshortratio(request)`
- `fapidata_get_basis(request)`
- `fapiprivate_get_forceorders(request)`
- `fapiprivate_get_allorders(request)`
- `fapiprivate_get_openorder(request)`
- `fapiprivate_get_openorders(request)`
- `fapiprivate_get_order(request)`
- `fapiprivate_get_account(request)`
- `fapiprivate_get_balance(request)`
- `fapiprivate_get_leveragebracket(request)`
- `fapiprivate_get_positionmargin_history(request)`
- `fapiprivate_get_positionrisk(request)`
- `fapiprivate_get_positionside_dual(request)`
- `fapiprivate_get_usertrades(request)`
- `fapiprivate_get_income(request)`
- `fapiprivate_get_commissionrate(request)`
- `fapiprivate_get_ratelimit_order(request)`
- `fapiprivate_get_apitradingstatus(request)`
- `fapiprivate_get_multiassetsmargin(request)`
- `fapiprivate_get_apireferral_ifnewuser(request)`
- `fapiprivate_get_apireferral_customization(request)`
- `fapiprivate_get_apireferral_usercustomization(request)`
- `fapiprivate_get_apireferral_tradernum(request)`
- `fapiprivate_get_apireferral_overview(request)`
- `fapiprivate_get_apireferral_tradevol(request)`
- `fapiprivate_get_apireferral_rebatevol(request)`
- `fapiprivate_get_apireferral_tradersummary(request)`
- `fapiprivate_get_adlquantile(request)`
- `fapiprivate_get_pmaccountinfo(request)`
- `fapiprivate_get_orderamendment(request)`
- `fapiprivate_get_income_asyn(request)`
- `fapiprivate_get_income_asyn_id(request)`
- `fapiprivate_get_order_asyn(request)`
- `fapiprivate_get_order_asyn_id(request)`
- `fapiprivate_get_trade_asyn(request)`
- `fapiprivate_get_trade_asyn_id(request)`
- `fapiprivate_get_feeburn(request)`
- `fapiprivate_get_symbolconfig(request)`
- `fapiprivate_get_accountconfig(request)`
- `fapiprivate_get_convert_orderstatus(request)`
- `fapiprivate_post_batchorders(request)`
- `fapiprivate_post_positionside_dual(request)`
- `fapiprivate_post_positionmargin(request)`
- `fapiprivate_post_margintype(request)`
- `fapiprivate_post_order(request)`
- `fapiprivate_post_leverage(request)`
- `fapiprivate_post_listenkey(request)`
- `fapiprivate_post_countdowncancelall(request)`
- `fapiprivate_post_multiassetsmargin(request)`
- `fapiprivate_post_apireferral_customization(request)`
- `fapiprivate_post_apireferral_usercustomization(request)`
- `fapiprivate_post_feeburn(request)`
- `fapiprivate_post_convert_getquote(request)`
- `fapiprivate_post_convert_acceptquote(request)`
- `fapiprivate_put_listenkey(request)`
- `fapiprivate_put_order(request)`
- `fapiprivate_put_batchorders(request)`
- `fapiprivate_delete_batchorders(request)`
- `fapiprivate_delete_order(request)`
- `fapiprivate_delete_allopenorders(request)`
- `fapiprivate_delete_listenkey(request)`
- `fapipublicv2_get_ticker_price(request)`
- `fapiprivatev2_get_account(request)`
- `fapiprivatev2_get_balance(request)`
- `fapiprivatev2_get_positionrisk(request)`
- `fapiprivatev3_get_account(request)`
- `fapiprivatev3_get_balance(request)`
- `fapiprivatev3_get_positionrisk(request)`
- `eapipublic_get_ping(request)`
- `eapipublic_get_time(request)`
- `eapipublic_get_exchangeinfo(request)`
- `eapipublic_get_index(request)`
- `eapipublic_get_ticker(request)`
- `eapipublic_get_mark(request)`
- `eapipublic_get_depth(request)`
- `eapipublic_get_klines(request)`
- `eapipublic_get_trades(request)`
- `eapipublic_get_historicaltrades(request)`
- `eapipublic_get_exercisehistory(request)`
- `eapipublic_get_openinterest(request)`
- `eapiprivate_get_account(request)`
- `eapiprivate_get_position(request)`
- `eapiprivate_get_openorders(request)`
- `eapiprivate_get_historyorders(request)`
- `eapiprivate_get_usertrades(request)`
- `eapiprivate_get_exerciserecord(request)`
- `eapiprivate_get_bill(request)`
- `eapiprivate_get_income_asyn(request)`
- `eapiprivate_get_income_asyn_id(request)`
- `eapiprivate_get_marginaccount(request)`
- `eapiprivate_get_mmp(request)`
- `eapiprivate_get_countdowncancelall(request)`
- `eapiprivate_get_order(request)`
- `eapiprivate_get_block_order_orders(request)`
- `eapiprivate_get_block_order_execute(request)`
- `eapiprivate_get_block_user_trades(request)`
- `eapiprivate_get_blocktrades(request)`
- `eapiprivate_post_order(request)`
- `eapiprivate_post_batchorders(request)`
- `eapiprivate_post_listenkey(request)`
- `eapiprivate_post_mmpset(request)`
- `eapiprivate_post_mmpreset(request)`
- `eapiprivate_post_countdowncancelall(request)`
- `eapiprivate_post_countdowncancelallheartbeat(request)`
- `eapiprivate_post_block_order_create(request)`
- `eapiprivate_post_block_order_execute(request)`
- `eapiprivate_put_listenkey(request)`
- `eapiprivate_put_block_order_create(request)`
- `eapiprivate_delete_order(request)`
- `eapiprivate_delete_batchorders(request)`
- `eapiprivate_delete_allopenorders(request)`
- `eapiprivate_delete_allopenordersbyunderlying(request)`
- `eapiprivate_delete_listenkey(request)`
- `eapiprivate_delete_block_order_create(request)`
- `public_get_ping(request)`
- `public_get_time(request)`
- `public_get_depth(request)`
- `public_get_trades(request)`
- `public_get_aggtrades(request)`
- `public_get_historicaltrades(request)`
- `public_get_klines(request)`
- `public_get_uiklines(request)`
- `public_get_ticker_24hr(request)`
- `public_get_ticker(request)`
- `public_get_ticker_tradingday(request)`
- `public_get_ticker_price(request)`
- `public_get_ticker_bookticker(request)`
- `public_get_exchangeinfo(request)`
- `public_get_avgprice(request)`
- `public_put_userdatastream(request)`
- `public_post_userdatastream(request)`
- `public_delete_userdatastream(request)`
- `private_get_allorderlist(request)`
- `private_get_openorderlist(request)`
- `private_get_orderlist(request)`
- `private_get_order(request)`
- `private_get_openorders(request)`
- `private_get_allorders(request)`
- `private_get_account(request)`
- `private_get_mytrades(request)`
- `private_get_ratelimit_order(request)`
- `private_get_mypreventedmatches(request)`
- `private_get_myallocations(request)`
- `private_get_account_commission(request)`
- `private_post_order_oco(request)`
- `private_post_orderlist_oco(request)`
- `private_post_orderlist_oto(request)`
- `private_post_orderlist_otoco(request)`
- `private_post_sor_order(request)`
- `private_post_sor_order_test(request)`
- `private_post_order(request)`
- `private_post_order_cancelreplace(request)`
- `private_post_order_test(request)`
- `private_delete_openorders(request)`
- `private_delete_orderlist(request)`
- `private_delete_order(request)`
- `papi_get_ping(request)`
- `papi_get_um_order(request)`
- `papi_get_um_openorder(request)`
- `papi_get_um_openorders(request)`
- `papi_get_um_allorders(request)`
- `papi_get_cm_order(request)`
- `papi_get_cm_openorder(request)`
- `papi_get_cm_openorders(request)`
- `papi_get_cm_allorders(request)`
- `papi_get_um_conditional_openorder(request)`
- `papi_get_um_conditional_openorders(request)`
- `papi_get_um_conditional_orderhistory(request)`
- `papi_get_um_conditional_allorders(request)`
- `papi_get_cm_conditional_openorder(request)`
- `papi_get_cm_conditional_openorders(request)`
- `papi_get_cm_conditional_orderhistory(request)`
- `papi_get_cm_conditional_allorders(request)`
- `papi_get_margin_order(request)`
- `papi_get_margin_openorders(request)`
- `papi_get_margin_allorders(request)`
- `papi_get_margin_orderlist(request)`
- `papi_get_margin_allorderlist(request)`
- `papi_get_margin_openorderlist(request)`
- `papi_get_margin_mytrades(request)`
- `papi_get_balance(request)`
- `papi_get_account(request)`
- `papi_get_margin_maxborrowable(request)`
- `papi_get_margin_maxwithdraw(request)`
- `papi_get_um_positionrisk(request)`
- `papi_get_cm_positionrisk(request)`
- `papi_get_um_positionside_dual(request)`
- `papi_get_cm_positionside_dual(request)`
- `papi_get_um_usertrades(request)`
- `papi_get_cm_usertrades(request)`
- `papi_get_um_leveragebracket(request)`
- `papi_get_cm_leveragebracket(request)`
- `papi_get_margin_forceorders(request)`
- `papi_get_um_forceorders(request)`
- `papi_get_cm_forceorders(request)`
- `papi_get_um_apitradingstatus(request)`
- `papi_get_um_commissionrate(request)`
- `papi_get_cm_commissionrate(request)`
- `papi_get_margin_marginloan(request)`
- `papi_get_margin_repayloan(request)`
- `papi_get_margin_margininteresthistory(request)`
- `papi_get_portfolio_interest_history(request)`
- `papi_get_um_income(request)`
- `papi_get_cm_income(request)`
- `papi_get_um_account(request)`
- `papi_get_cm_account(request)`
- `papi_get_repay_futures_switch(request)`
- `papi_get_um_adlquantile(request)`
- `papi_get_cm_adlquantile(request)`
- `papi_get_um_trade_asyn(request)`
- `papi_get_um_trade_asyn_id(request)`
- `papi_get_um_order_asyn(request)`
- `papi_get_um_order_asyn_id(request)`
- `papi_get_um_income_asyn(request)`
- `papi_get_um_income_asyn_id(request)`
- `papi_get_um_orderamendment(request)`
- `papi_get_cm_orderamendment(request)`
- `papi_get_um_feeburn(request)`
- `papi_get_um_accountconfig(request)`
- `papi_get_um_symbolconfig(request)`
- `papi_get_cm_accountconfig(request)`
- `papi_get_cm_symbolconfig(request)`
- `papi_get_ratelimit_order(request)`
- `papi_post_um_order(request)`
- `papi_post_um_conditional_order(request)`
- `papi_post_cm_order(request)`
- `papi_post_cm_conditional_order(request)`
- `papi_post_margin_order(request)`
- `papi_post_marginloan(request)`
- `papi_post_repayloan(request)`
- `papi_post_margin_order_oco(request)`
- `papi_post_um_leverage(request)`
- `papi_post_cm_leverage(request)`
- `papi_post_um_positionside_dual(request)`
- `papi_post_cm_positionside_dual(request)`
- `papi_post_auto_collection(request)`
- `papi_post_bnb_transfer(request)`
- `papi_post_repay_futures_switch(request)`
- `papi_post_repay_futures_negative_balance(request)`
- `papi_post_listenkey(request)`
- `papi_post_asset_collection(request)`
- `papi_post_margin_repay_debt(request)`
- `papi_post_um_feeburn(request)`
- `papi_put_listenkey(request)`
- `papi_put_um_order(request)`
- `papi_put_cm_order(request)`
- `papi_delete_um_order(request)`
- `papi_delete_um_conditional_order(request)`
- `papi_delete_um_allopenorders(request)`
- `papi_delete_um_conditional_allopenorders(request)`
- `papi_delete_cm_order(request)`
- `papi_delete_cm_conditional_order(request)`
- `papi_delete_cm_allopenorders(request)`
- `papi_delete_cm_conditional_allopenorders(request)`
- `papi_delete_margin_order(request)`
- `papi_delete_margin_allopenorders(request)`
- `papi_delete_margin_orderlist(request)`
- `papi_delete_listenkey(request)`

### WS Unified

- `describe(self)`
- `describe_data(self)`
- `stream(self, type: Str, subscriptionHash: Str, numSubscriptions=1)`
- `watch_liquidations(self, symbol: str, since: Int = None, limit: Int = None, params={})`
- `watch_liquidations_for_symbols(self, symbols: List[str] = None, since: Int = None, limit: Int = None, params={})`
- `watch_my_liquidations(self, symbol: str, since: Int = None, limit: Int = None, params={})`
- `watch_my_liquidations_for_symbols(self, symbols: List[str], since: Int = None, limit: Int = None, params={})`
- `watch_order_book(self, symbol: str, limit: Int = None, params={})`
- `watch_order_book_for_symbols(self, symbols: List[str], limit: Int = None, params={})`
- `un_watch_order_book_for_symbols(self, symbols: List[str], params={})`
- `un_watch_order_book(self, symbol: str, params={})`
- `fetch_order_book_ws(self, symbol: str, limit: Int = None, params={})`
- `fetch_order_book_snapshot(self, client, message, subscription)`
- `watch_trades_for_symbols(self, symbols: List[str], since: Int = None, limit: Int = None, params={})`
- `un_watch_trades_for_symbols(self, symbols: List[str], params={})`
- `un_watch_trades(self, symbol: str, params={})`
- `watch_trades(self, symbol: str, since: Int = None, limit: Int = None, params={})`
- `watch_ohlcv(self, symbol: str, timeframe='1m', since: Int = None, limit: Int = None, params={})`
- `watch_ohlcv_for_symbols(self, symbolsAndTimeframes: List[List[str]], since: Int = None, limit: Int = None, params={})`
- `un_watch_ohlcv_for_symbols(self, symbolsAndTimeframes: List[List[str]], params={})`
- `un_watch_ohlcv(self, symbol: str, timeframe='1m', params={})`
- `fetch_ticker_ws(self, symbol: str, params={})`
- `fetch_ohlcv_ws(self, symbol: str, timeframe='1m', since: Int = None, limit: Int = None, params={})`
- `watch_ticker(self, symbol: str, params={})`
- `watch_mark_price(self, symbol: str, params={})`
- `watch_mark_prices(self, symbols: Strings = None, params={})`
- `watch_tickers(self, symbols: Strings = None, params={})`
- `un_watch_tickers(self, symbols: Strings = None, params={})`
- `un_watch_ticker(self, symbol: str, params={})`
- `watch_bids_asks(self, symbols: Strings = None, params={})`
- `watch_multi_ticker_helper(self, methodName, channelName: str, symbols: Strings = None, params={})`
- `get_message_hash(self, channelName: str, symbol: Str, isBidAsk: bool)`
- `sign_params(self, params={})`
- `authenticate(self, params={})`
- `keep_alive_listen_key(self, params={})`
- `set_balance_cache(self, client: Client, type, isPortfolioMargin=False)`
- `load_balance_snapshot(self, client, messageHash, type, isPortfolioMargin)`
- `fetch_balance_ws(self, params={})`
- `fetch_position_ws(self, symbol: str, params={})`
- `fetch_positions_ws(self, symbols: Strings = None, params={})`
- `watch_balance(self, params={})`
- `get_market_type(self, method, market, params={})`
- `create_order_ws(self, symbol: str, type: OrderType, side: OrderSide, amount: float, price: Num = None, params={})`
- `edit_order_ws(self, id: str, symbol: str, type: OrderType, side: OrderSide, amount: Num = None, price: Num = None, params={})`
- `cancel_order_ws(self, id: str, symbol: Str = None, params={})`
- `cancel_all_orders_ws(self, symbol: Str = None, params={})`
- `fetch_order_ws(self, id: str, symbol: Str = None, params={})`
- `fetch_orders_ws(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_closed_orders_ws(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_open_orders_ws(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `watch_orders(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `watch_positions(self, symbols: Strings = None, since: Int = None, limit: Int = None, params={})`
- `set_positions_cache(self, client: Client, type, symbols: Strings = None, isPortfolioMargin=False)`
- `load_positions_snapshot(self, client, messageHash, type, isPortfolioMargin)`
- `fetch_my_trades_ws(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `fetch_trades_ws(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`
- `watch_my_trades(self, symbol: Str = None, since: Int = None, limit: Int = None, params={})`

## Contribution
- Give us a star :star:
- Fork and Clone! Awesome
- Select existing issues or create a new issue.