import { debounce, pipe } from 'overmind';
import { Context } from '.';

export const getStocks = async ({ state, effects }: Context): Promise<void> => {
  state.isLoading = true;
  state.stocks = await effects.api.getStocks();
  state.isLoading = false;
};

export const searchStocks = pipe(
  debounce(500),
  async ({ state, effects }: Context, searchParam: string): Promise<void> => {
    state.isLoading = true;
    state.stocks = await effects.api.searchStocks(searchParam);
    state.isLoading = false;
  }
);
