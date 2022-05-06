import { Stock } from '@alaamu/api-interfaces';
import { Adapter } from '../interfaces/adapter';
import StockModel from '../models/stock.model';

export class StockAdapter implements Adapter<Stock, StockModel> {
  adaptApi(response: Stock): StockModel {
    return new StockModel(response.ticker, response.name);
  }
}
