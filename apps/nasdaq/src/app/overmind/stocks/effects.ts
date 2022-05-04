export const api = {
  async getStocksFromServer() {
    const response = await fetch(
      'https://api.polygon.io/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=50&apiKey=VXgEOdVKqYol4TPCABt1YFJzhZMxPn38'
    );
    const data = await response.json();
    return data.results;
  },
  async getSingleStockFromServer() {
    const response = await fetch(
      'https://api.polygon.io/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=50&apiKey=VXgEOdVKqYol4TPCABt1YFJzhZMxPn38'
    );
    const data = await response.json();
    return data.results;
  },
};
