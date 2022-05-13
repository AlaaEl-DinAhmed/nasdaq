import { derived } from 'overmind';
import {
  IStockDetails,
  IStockDetailsResponse,
} from '../../interfaces/stock-details.interface';
import { IStock, IStocksData } from '../../interfaces/stocks.interface';
import {
  IPrevCloseAdapted,
  IPrevCloseDetails,
} from './../../interfaces/prev-close.interface';

export type StocksState = {
  isLoading: boolean;
  stocks: IStocksData;
  stockList: IStock[];
  nextUrl: string;
};

export type SingleStockState = {
  isLoading: boolean;
  stock: IStockDetailsResponse;
  singleStock: IStockDetails;
};

export type PrevCloseState = {
  isLoading: boolean;
  prevClose: IPrevCloseAdapted;
  tickerPrevClose: IPrevCloseDetails;
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
      industry: '',
      website: '',
    },
  },
  singleStock: derived((state: SingleStockState) => state.stock.results),
};

const stockPrevCloseState: PrevCloseState = {
  isLoading: false,
  prevClose: {
    status: 'OK',
    resultsCount: 0,
    results: {
      close: 0,
      open: 0,
      high: 0,
      low: 0,
      volume: 0,
    },
  },
  tickerPrevClose: derived((state: PrevCloseState) => state.prevClose.results),
};

export const state: {
  stocksState: StocksState;
  singleStockState: SingleStockState;
  prevCloseState: PrevCloseState;
} = {
  stocksState: {
    ...stocksState,
  },
  singleStockState: {
    ...singleStockState,
  },
  prevCloseState: {
    ...stockPrevCloseState,
  },
};
