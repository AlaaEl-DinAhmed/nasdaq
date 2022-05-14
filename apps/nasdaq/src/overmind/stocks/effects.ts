import { PrevCloseAdapter } from '../../adapters/prev-close-adapter';
import { StockDetailsAdapter } from '../../adapters/stock-details.adapter';
import { StockAdapter } from '../../adapters/stock.adapter';
import { API, AUTH_HEADER } from '../../constants/API';
import { environment } from '../../environments/environment';
import { IStocksResponse } from '../../interfaces/IStocksResponse';
import {
  IPrevCloseAdapted,
  IPrevCloseDetails,
} from '../../interfaces/prev-close.interface';
import { Status } from '../../interfaces/status-api';
import {
  IStockDetails,
  IStockDetailsResponse,
} from '../../interfaces/stock-details.interface';
import { Stock } from '../../interfaces/stocks-response';
import { IStock, IStocksData } from '../../interfaces/stocks.interface';
import { IPrevCloseResponse } from './../../interfaces/prev-close-response.interface';
import { ISingleStockResponse } from './../../interfaces/stock-details-response.interface';

export const api = {
  async getStocks(): Promise<IStocksData> {
    const response = await fetch(`${environment.apiBaseUrl}${API.ticker}`, {
      ...AUTH_HEADER,
    });
    const data = (await response.json()) as IStocksResponse;
    if (data.status === 'OK') {
      const adoptedStocks = new StockAdapter();
      const adoptedStocksData: IStock[] = data.results?.map((item: Stock) => {
        return adoptedStocks.adaptApi(item);
      });
      return {
        ...data,
        results: [...adoptedStocksData],
      };
    } else {
      return {
        results: [],
        next_url: '',
        status: 'ERROR',
      };
    }
  },

  async getMoreStocks(
    nextUrl: string
  ): Promise<IStocksData | { results: []; next_url: string; status: 'ERROR' }> {
    const response = await fetch(`${nextUrl}`, {
      ...AUTH_HEADER,
    });
    const data = (await response.json()) as IStocksResponse;
    if (data.status === 'OK') {
      const adoptedStocks = new StockAdapter();
      const adoptedStocksData: IStock[] = data.results?.map((item: Stock) => {
        return adoptedStocks.adaptApi(item);
      });
      return {
        ...data,
        results: [...adoptedStocksData],
      };
    } else {
      return { status: 'ERROR', results: [], next_url: '' };
    }
  },

  async searchStocks(searchParam: string): Promise<IStocksData> {
    const response = await fetch(
      `${environment.apiBaseUrl}${API.search}${searchParam}`,
      {
        cache: 'force-cache',
        ...AUTH_HEADER,
      }
    );
    const data = (await response.json()) as IStocksResponse;
    if (data.status === 'OK') {
      const adoptedStocks = new StockAdapter();
      const adoptedStocksData: IStock[] = data.results?.map((item: Stock) => {
        return adoptedStocks.adaptApi(item);
      });
      return {
        ...data,
        results: [...adoptedStocksData],
      };
    } else {
      return {
        results: [],
        next_url: '',
        status: 'ERROR',
      };
    }
  },

  async getTickerDetails(tickerID: string): Promise<IStockDetailsResponse> {
    const response = await fetch(
      `${environment.apiBaseUrl}v3/reference/tickers/${tickerID}`,
      {
        cache: 'force-cache',
        ...AUTH_HEADER,
      }
    );
    const data = (await response.json()) as ISingleStockResponse;
    if (data.status === 'OK') {
      const adoptedStocks = new StockDetailsAdapter();
      const adoptedStocksData: IStockDetails = adoptedStocks.adaptApi(
        data.results
      );
      return {
        ...data,
        results: adoptedStocksData,
      };
    } else {
      return {
        status: Status.fails,
        results: {
          ticker: '',
          name: '',
          description: '',
          logo_url: '',
          industry: '',
          website: '',
        },
      };
    }
  },

  async getPrevClose(tickerID: string): Promise<IPrevCloseAdapted> {
    const response = await fetch(
      `${environment.apiBaseUrl}v2/aggs/ticker/${tickerID}/prev`,
      {
        cache: 'force-cache',
        ...AUTH_HEADER,
      }
    );
    const data = (await response.json()) as IPrevCloseResponse;
    if (data.status === 'OK' && data.resultsCount !== 0) {
      const adoptedStocks = new PrevCloseAdapter();
      const adoptedStocksData: IPrevCloseDetails = adoptedStocks.adaptApi(
        data.results[0]
      );
      return {
        ...data,
        status: Status.ok,
        results: adoptedStocksData,
      };
    } else {
      return {
        status: Status.fails,
        resultsCount: 0,
        results: {
          close: 0,
          open: 0,
          high: 0,
          low: 0,
          volume: 0,
        },
      };
    }
  },
};
