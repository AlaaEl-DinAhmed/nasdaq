export const API = {
  ticker: 'v3/reference/tickers?limit=50&cursor=',
  search: 'v3/reference/tickers?limit=50&search=',
};

export const API_KEY = 'VXgEOdVKqYol4TPCABt1YFJzhZMxPn38';

export const AUTH_HEADER = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};
