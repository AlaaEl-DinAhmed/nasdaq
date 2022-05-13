import axios from 'axios';
import * as express from 'express';
import { environment } from '../../environments/environment';

export const getAllStocks = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const response = await axios.get(environment.apiUrl);
  const data = await response.data;
  res.json(data);
};

// const adaptNewStocks = (response: IStocksResponse): IStock[] => {
//   const adoptedStocks = new StockAdapter();
//   const adoptedStocksData: IStock[] = response.results.map((item: Stock) => {
//     return adoptedStocks.adaptApi(item);
//   });

//   return adoptedStocksData;
// };
