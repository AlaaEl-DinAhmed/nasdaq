import { PrevCloseAdapter } from '../../adapters/prev-close-adapter';
import { StockDetailsAdapter } from '../../adapters/stock-details.adapter';
import { StockAdapter } from '../../adapters/stock.adapter';
import { API, AUTH_HEADER } from '../../constants/API';
import { environment } from '../../environments/environment';
import {
  IPrevCloseAdapted,
  IPrevCloseDetails,
} from '../../interfaces/prev-close.interface';
import {
  IStockDetails,
  IStockDetailsResponse,
} from '../../interfaces/stock-details.interface';
import { IStocksResponse, Stock } from '../../interfaces/stocks-response';
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
    const adoptedStocksData: IStock[] = data.results.map((item: Stock) => {
      return adoptedStocks.adaptApi(item);
    });
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
    const adoptedStocksData: IStock[] = data.results.map((item: Stock) => {
      return adoptedStocks.adaptApi(item);
    });
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
    const adoptedStocksData: IStock[] = data.results.map((item: Stock) => {
      return adoptedStocks.adaptApi(item);
    });
    return {
      ...data,
      results: [...adoptedStocksData],
    };
  },

  async getTickerDetails(tickerID: string): Promise<IStockDetailsResponse> {
    const response = await fetch(
      `${environment.apiBaseUrl}v3/reference/tickers/${tickerID}`,
      {
        cache: 'force-cache',
        ...AUTH_HEADER,
      }
    );
    const data = (await response.json()) as ISingleStockResponse;
    const adoptedStocks = new StockDetailsAdapter();
    const adoptedStocksData: IStockDetails = adoptedStocks.adaptApi(
      data.results
    );
    return {
      ...data,
      results: adoptedStocksData,
    };
  },

  async getPrevClose(tickerID: string): Promise<IPrevCloseAdapted> {
    const response = await fetch(
      `${environment.apiBaseUrl}v2/aggs/ticker/${tickerID}/prev`,
      {
        cache: 'force-cache',
        ...AUTH_HEADER,
      }
    );
    const data = (await response.json()) as IPrevCloseResponse;
    const adoptedStocks = new PrevCloseAdapter();
    const adoptedStocksData: IPrevCloseDetails = adoptedStocks.adaptApi(
      data.results[0]
    );
    return {
      ...data,
      results: adoptedStocksData,
    };
  },
};
