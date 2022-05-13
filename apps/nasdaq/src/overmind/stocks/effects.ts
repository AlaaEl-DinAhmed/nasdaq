import { StockAdapter } from '../../adapters/stock.adapter';
import { API, AUTH_HEADER } from '../../constants/API';
import { environment } from '../../environments/environment';
import { IStocksResponse } from '../../interfaces/stocks-response';
import { IStock, IStocksData } from '../../interfaces/stocks.interface';
import { IPrevCloseResponse } from './../../interfaces/prev-close-response.interface';
import { ISingleStockResponse } from './../../interfaces/stock-details-response.interface';
export const api = {
  async getStocks(): Promise<IStocksData> {
    const response = await fetch(`${environment.apiBaseUrl}${API.ticker}`, {
      cache: 'force-cache',
      ...AUTH_HEADER,
    });
    const data = (await response.json()) as IStocksResponse;
    const adoptedStocks = new StockAdapter();
    const adoptedStocksData: IStock[] = adoptedStocks.adaptApi(data.results);
    return {
      ...data,
      results: [...adoptedStocksData],
    };
  },

  async getMoreStocks(nextUrl: string): Promise<IStocksData> {
    const response = await fetch(`${nextUrl}`, {
      ...AUTH_HEADER,
    });
    const data = (await response.json()) as IStocksResponse;
    const adoptedStocks = new StockAdapter();
    const adoptedStocksData: IStock[] = adoptedStocks.adaptApi(data.results);
    return {
      ...data,
      results: [...adoptedStocksData],
    };
  },

  async searchStocks(searchParam: string): Promise<IStocksData> {
    console.log(`${environment.apiBaseUrl}${API.search}?${searchParam}`);
    const response = await fetch(
      `${environment.apiBaseUrl}${API.search}${searchParam}`,
      {
        ...AUTH_HEADER,
      }
    );
    const data = (await response.json()) as IStocksResponse;
    const adoptedStocks = new StockAdapter();
    const adoptedStocksData: IStock[] = adoptedStocks.adaptApi(data.results);
    return {
      ...data,
      results: [...adoptedStocksData],
    };
  },

  async getTickerDetails(tickerID: string): Promise<ISingleStockResponse> {
    const response = await fetch(
      `${environment.apiBaseUrl}v3/reference/tickers/${tickerID}`,
      {
        cache: 'force-cache',
        ...AUTH_HEADER,
      }
    );
    const data = (await response.json()) as ISingleStockResponse;
    return data;
  },

  async getPrevClose(tickerID: string): Promise<IPrevCloseResponse> {
    const response = await fetch(
      `${environment.apiBaseUrl}v2/aggs/ticker/${tickerID}/prev`,
      {
        cache: 'force-cache',
        ...AUTH_HEADER,
      }
    );
    const data = (await response.json()) as IPrevCloseResponse;
    return data;
  },
};
