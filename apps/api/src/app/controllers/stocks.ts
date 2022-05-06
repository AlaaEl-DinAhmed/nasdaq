import { IStock, IStocksResponse, Stock } from '@alaamu/api-interfaces';
import axios from 'axios';
import * as express from 'express';
import { createClient } from 'redis';
import { environment } from '../../environments/environment';
import { StockAdapter } from '../adapters/stock.adapter';

const EXPIRATION_TIME = 60;
const REDIS_NAME = 'stocks';

export const getAllStocks = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const client = createClient();
  await client.connect();
  const cachedStocks = await client.get(REDIS_NAME);
  if (cachedStocks) {
    res.json(JSON.parse(cachedStocks));
  } else {
    const response = await axios.get(environment.apiUrl);
    const data: IStocksResponse = await response.data;
    const adoptedStocksData: IStock[] = adaptNewStocks(data);
    client.setEx(
      REDIS_NAME,
      EXPIRATION_TIME,
      JSON.stringify(adoptedStocksData)
    );
    const stocks = await client.get(REDIS_NAME);
    res.json(stocks);
  }
};

const adaptNewStocks = (response: IStocksResponse): IStock[] => {
  const adoptedStocks = new StockAdapter();
  const adoptedStocksData: IStock[] = response.results.map((item: Stock) => {
    return adoptedStocks.adaptApi(item);
  });

  return adoptedStocksData;
};
