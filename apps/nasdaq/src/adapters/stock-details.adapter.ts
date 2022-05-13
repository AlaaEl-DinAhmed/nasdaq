import { Adapter } from '../interfaces/adapter';
import { ISingleStock } from '../interfaces/stock-details-response.interface';
import StockDetailsModel from '../models/stock-details.model';

export class StockDetailsAdapter
  implements Adapter<ISingleStock, StockDetailsModel>
{
  adaptApi(response: ISingleStock): StockDetailsModel {
    return new StockDetailsModel(
      response.ticker,
      response.name,
      response.description,
      response.branding.logo_url,
      response.sic_description,
      response.homepage_url
    );
  }
}
