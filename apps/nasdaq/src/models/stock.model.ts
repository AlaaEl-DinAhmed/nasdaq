import { IStock } from '../interfaces/stocks.interface';

export default class StockModel implements IStock {
  constructor(public ticker: string, public name: string) {
    this.name = name;
    this.ticker = ticker;
  }
}
