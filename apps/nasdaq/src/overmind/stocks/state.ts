import { IStocksResponse, Stock } from '@alaamu/api-interfaces';
import { derived } from 'overmind';
import { IPrevCloseResponse } from '../../interfaces/prev-close-response.interface';
import { ISingleStockResponse } from '../../interfaces/stock-details-response.interface';
import { ISingleStock } from '../../interfaces/stock-details.interface';
import { IPrevClose } from './../../interfaces/prev-close.interface';

type StocksState = {
  isLoading: boolean;
  stocks: IStocksResponse;
  stockList: Stock[];
  nextUrl: string;
};

type SingleStockState = {
  isLoading: boolean;
  stock: ISingleStockResponse;
  singleStock: ISingleStock;
};

type PrevCloseState = {
  isLoading: boolean;
  prevClose: IPrevCloseResponse;
  tickerPrevClose: IPrevClose;
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
      homepage_url: '',
    },
  },
  singleStock: derived((state: SingleStockState) => state.stock.results),
};

const stockPrevCloseState: PrevCloseState = {
  isLoading: false,
  prevClose: {
    status: 'OK',
    resultsCount: 0,
    results: [
      {
        c: 0,
        o: 0,
        h: 0,
        l: 0,
        v: 0,
      },
    ],
  },
  tickerPrevClose: derived(
    (state: PrevCloseState) => state.prevClose.results[0]
  ),
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
