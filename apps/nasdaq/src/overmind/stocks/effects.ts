import { API, AUTH_HEADER } from '../../constants/apis';
import { environment } from '../../environments/environment';

export const api = {
  async getStocks() {
    const response = await fetch(`${environment.apiBaseUrl}${API.ticker}`, {
      cache: 'force-cache',
      ...AUTH_HEADER,
    });
    const data = await response.json();
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
