import { debounce, pipe } from 'overmind';
import { Context } from '.';

export const getStocks = async ({ state, effects }: Context): Promise<void> => {
  state.stocksState.isLoading = true;
  state.stocksState.stocks = await effects.api.getStocks();
  state.stocksState.isLoading = false;
};

export const getMoreStocks = async (
  { state, effects }: Context,
  nextUrl: string
): Promise<void> => {
  const { results, next_url, status } = await effects.api.getMoreStocks(
    nextUrl
  );
  state.stocksState.isLoading = true;
  state.stocksState.stocks.results = [
    ...state.stocksState.stockList,
    ...results,
  ];
  state.stocksState.stocks.next_url = next_url;
  state.stocksState.stocks.status = status;
  state.stocksState.isLoading = false;
};

export const searchStocks = pipe(
  debounce(500),
  async ({ state, effects }: Context, searchParam: string): Promise<void> => {
    state.stocksState.isLoading = true;
    state.stocksState.stocks = await effects.api.searchStocks(searchParam);
    state.stocksState.isLoading = false;
  }
);

export const getTickerDetails = async (
  { state, effects }: Context,
  tickerId: string
): Promise<void> => {
  state.singleStockState.isLoading = true;
  state.singleStockState.stock = await effects.api.getTickerDetails(tickerId);
  state.singleStockState.isLoading = false;
};

export const getPrevClose = async (
  { state, effects }: Context,
  tickerId: string
): Promise<void> => {
  state.prevCloseState.isLoading = true;
  state.prevCloseState.prevClose = await effects.api.getPrevClose(tickerId);
  state.prevCloseState.isLoading = false;
};
