import { IStock } from '@alaamu/api-interfaces';
export default class StockModel implements IStock {
  constructor(public ticker: string, public name: string) {
    this.name = name;
    this.ticker = ticker;
  }
}
