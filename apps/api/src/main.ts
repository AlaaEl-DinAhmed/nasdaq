import axios from 'axios';
import * as express from 'express';
import { createClient } from 'redis';

const EXPIRATION_TIME = 60;
const app = express();

app.get('/api/stocks', async (req: express.Request, res: express.Response) => {
  const client = createClient();
  await client.connect();
  const cachedStocks = await client.get('stocks');
  if (cachedStocks) {
    return res.json(cachedStocks);
  } else {
    const response = await axios.get(
      'https://api.polygon.io/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=50&apiKey=VXgEOdVKqYol4TPCABt1YFJzhZMxPn38'
    );
    const data = await response.data;
    client.setEx('stocks', EXPIRATION_TIME, JSON.stringify(data));
    const stocks = await client.get('stocks');
    return res.json(stocks);
  }
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
