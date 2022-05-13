import { IStockDetails } from '../interfaces/stock-details.interface';

export default class StockDetailsModel implements IStockDetails {
  constructor(
    public ticker: string,
    public name: string,
    public description: string,
    public logo_url: string,
    public industry: string,
    public website: string
  ) {
    this.name = name;
    this.ticker = ticker;
    this.description = description;
    this.logo_url = logo_url;
    this.industry = industry;
    this.website = website;
  }
}
