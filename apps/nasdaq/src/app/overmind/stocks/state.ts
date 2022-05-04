import { Stocks } from '@alaamu/api-interfaces';

export type State = {
  isLoading: boolean;
  stocks: Stocks[];
  singleStock: Stocks;
};
export const state: State = {
  isLoading: false,
  stocks: [],
  singleStock: {
    id: null,
    title: '',
  },
};
