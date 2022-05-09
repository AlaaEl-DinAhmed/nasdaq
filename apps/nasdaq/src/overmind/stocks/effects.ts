import { environment } from '../../environments/environment';
const TICKERS_API =
  'v3/reference/tickers?limit=75&apiKey=VXgEOdVKqYol4TPCABt1YFJzhZMxPn38';
export const api = {
  async getStocks() {
    const response = await fetch(`${environment.apiBaseUrl}${TICKERS_API}`, {
      cache: 'force-cache',
    });
    const data = await response.json();
    return data;
  },

  async searchStocks(searchParam: string) {
    const response = await fetch(
      `${environment.apiBaseUrl}v3/reference/tickers?search=${searchParam}&apiKey=VXgEOdVKqYol4TPCABt1YFJzhZMxPn38`
    );
    const data = await response.json();
    return data;
  },
};
