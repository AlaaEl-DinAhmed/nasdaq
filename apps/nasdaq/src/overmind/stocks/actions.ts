import { Context } from '.';

export const getStocks = async ({ state, effects }: Context) => {
  state.isLoading = true;
  state.stocks = await effects.api.getStocksFromServer();
  state.isLoading = false;
};

export const getSingleStock = async ({ state, effects }: Context) => {
  state.isLoading = true;
  state.stocks = await effects.api.getSingleStockFromServer();
  state.isLoading = false;
};
