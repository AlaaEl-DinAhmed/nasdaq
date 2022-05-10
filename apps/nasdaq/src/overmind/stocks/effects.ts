import { IStocksResponse } from '@alaamu/api-interfaces';
import { API, AUTH_HEADER } from '../../constants/apis';
import { environment } from '../../environments/environment';
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

  async searchStocks(searchParam: string) {
    const response = await fetch(
      `${environment.apiBaseUrl}${API.searchTickers}${searchParam}`,
      {
        ...AUTH_HEADER,
      }
    );
    const data = await response.json();
    return data;
  },
};
