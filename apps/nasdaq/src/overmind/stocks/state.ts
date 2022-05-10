import { IStocksResponse, Stock } from '@alaamu/api-interfaces';
import { derived } from 'overmind';

export type State = {
  isLoading: boolean;
  stocks: IStocksResponse;
  stockList: Stock[];
  nextUrl: string;
};
export const state: State = {
  isLoading: false,
  stocks: {
    results: [],
    next_url: '',
    status: '',
  },
  stockList: derived((state: State) => state.stocks.results),
  nextUrl: derived((state: State) => state.stocks.next_url),
};
