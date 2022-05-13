import { Adapter } from '../interfaces/adapter';
import { Stock } from '../interfaces/stocks-response';
import StockModel from '../models/stock.model';

export class StockAdapter implements Adapter<Stock, StockModel> {
  adaptApi(response: Stock[]): StockModel[] {
    const adaptedResponse = response.map(
      (response: Stock) => new StockModel(response.ticker, response.name)
    );
    return adaptedResponse;
  }
}
