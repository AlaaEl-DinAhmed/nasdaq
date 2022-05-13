export interface IStocksResponse {
  results: Stock[];
  next_url: string;
  status: string;
}

export interface Stock {
  ticker: string;
  name: string;
  market: Market;
  locale: Locale;
  primary_exchange: string;
  type: string;
  active: boolean;
  currency_name: CurrencyName;
  cik?: string;
  composite_figi?: string;
  share_class_figi?: string;
  last_updated_utc: Date;
}

export enum CurrencyName {
  Usd = 'usd',
}

export enum Locale {
  Us = 'us',
}

export enum Market {
  Stocks = 'stocks',
}
