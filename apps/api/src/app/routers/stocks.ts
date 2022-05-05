import * as express from 'express';
import { getAllStocks } from '../controllers/stocks';

const stocksRouter = express.Router();

stocksRouter.get('/stocks', getAllStocks);

export default stocksRouter;
