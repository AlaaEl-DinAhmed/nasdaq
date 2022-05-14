import { Status } from './status-api';

export interface IStockDetailsResponse {
  status: Status;
  results: IStockDetails;
}

export interface IStockDetails {
  ticker: string;
  name: string;
  description: string;
  logo_url: string;
  industry: string;
  website: string;
}
