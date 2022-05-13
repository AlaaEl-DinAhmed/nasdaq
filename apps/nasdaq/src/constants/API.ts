export const API = {
  ticker: 'v3/reference/tickers?limit=50&cursor=',
  searchTickers: 'v3/reference/tickers?search=',
};

export const API_KEY = 'VXgEOdVKqYol4TPCABt1YFJzhZMxPn38';

export const AUTH_HEADER = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};
