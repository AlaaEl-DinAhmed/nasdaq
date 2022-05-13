export interface IStocksData {
  results: IStock[];
  next_url: string;
  status: string;
}
export interface IStock {
  ticker: string;
  name: string;
}
