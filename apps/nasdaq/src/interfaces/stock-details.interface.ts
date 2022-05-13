export interface IStockDetailsResponse {
  status: 'OK' | 'NOT_FOUND';
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
