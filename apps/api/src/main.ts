import * as express from 'express';
import stocksRouter from './app/routers/stocks';

const app = express();

app.use('/api', stocksRouter);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
