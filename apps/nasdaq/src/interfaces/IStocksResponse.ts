import { Stock } from './stocks-response';

export interface IStocksResponse {
  results: Stock[];
  next_url: string;
  status: string;
}
