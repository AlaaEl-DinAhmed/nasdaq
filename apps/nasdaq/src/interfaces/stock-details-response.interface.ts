import { ISingleStock } from './stock-details.interface';

export interface ISingleStockResponse {
  status: 'OK' | 'NOT_FOUND';
  results: ISingleStock;
}
