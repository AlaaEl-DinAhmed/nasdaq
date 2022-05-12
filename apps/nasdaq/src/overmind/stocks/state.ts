import { IStocksResponse, Stock } from '@alaamu/api-interfaces';
import { derived } from 'overmind';
import { ISingleStockResponse } from '../../interfaces/stock-details-response.interface';
import { ISingleStock } from '../../interfaces/stock-details.interface';

type StocksState = {
  isLoading: boolean;
  stocks: IStocksResponse;
  stockList: Stock[];
  nextUrl: string;
};

export type SingleStockState = {
  isLoading: boolean;
  stock: ISingleStockResponse;
  singleStock: ISingleStock;
};

const stocksState: StocksState = {
  isLoading: false,
  stocks: {
    results: [],
    next_url: '',
    status: '',
  },
  stockList: derived((state: StocksState) => state.stocks.results),
  nextUrl: derived((state: StocksState) => state.stocks.next_url),
};

const singleStockState: SingleStockState = {
  isLoading: false,
  stock: {
    status: 'OK',
    results: {
      ticker: '',
      name: '',
      description: '',
      logo_url: '',
      sic_description: '',
      website: 'string',
    },
  },
  singleStock: derived((state: SingleStockState) => state.stock.results),
};
export const state: {
  stocksState: StocksState;
  singleStockState: SingleStockState;
} = {
  stocksState: {
    ...stocksState,
  },
  singleStockState: {
    ...singleStockState,
  },
};
