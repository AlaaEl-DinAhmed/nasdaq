import { IStocksResponse } from '@alaamu/api-interfaces';
import { API, AUTH_HEADER } from '../../constants/API';
import { environment } from '../../environments/environment';
import { ISingleStockResponse } from './../../interfaces/stock-details-response.interface';
export const api = {
  async getStocks(): Promise<IStocksResponse> {
    const response = await fetch(`${environment.apiBaseUrl}${API.ticker}`, {
      cache: 'force-cache',
      ...AUTH_HEADER,
    });
    const data = (await response.json()) as IStocksResponse;
    return data;
  },

  async getMoreStocks(nextUrl: string): Promise<IStocksResponse> {
    const response = await fetch(`${nextUrl}`, {
      ...AUTH_HEADER,
    });
    const data = (await response.json()) as IStocksResponse;
    return data;
  },

  async searchStocks(searchParam: string): Promise<IStocksResponse> {
    const response = await fetch(
      `${environment.apiBaseUrl}${API.searchTickers}${searchParam}`,
      {
        ...AUTH_HEADER,
      }
    );
    const data = (await response.json()) as IStocksResponse;
    return data;
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
};
