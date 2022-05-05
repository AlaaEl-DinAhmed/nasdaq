import axios from 'axios';
import * as express from 'express';
import { createClient } from 'redis';
import { environment } from '../../environments/environment';

const EXPIRATION_TIME = 60;
const REDIS_NAME = 'stocks';

export const getAllStocks = async (
  req: express.Request,
  res: express.Response
) => {
  const client = createClient();
  await client.connect();
  const cachedStocks = await client.get(REDIS_NAME);
  if (cachedStocks) {
    return res.json(cachedStocks);
  } else {
    const response = await axios.get(environment.apiUrl);
    const data = await response.data;
    client.setEx(REDIS_NAME, EXPIRATION_TIME, JSON.stringify(data));
    const stocks = await client.get(REDIS_NAME);
    return res.json(stocks);
  }
};
