import { CurrencyName, Locale, Market, Stock } from '@alaamu/api-interfaces';

export type State = {
  isLoading: boolean;
  stocks: Stock[];
  singleStock: Stock;
};
export const state: State = {
  isLoading: false,
  stocks: [],
  singleStock: {
    ticker: '',
    name: '',
    market: Market.Stocks,
    locale: Locale.Us,
    primary_exchange: '',
    type: '',
    active: false,
    currency_name: CurrencyName.Usd,
    cik: '',
    composite_figi: '',
    share_class_figi: '',
    last_updated_utc: new Date(),
  },
};
