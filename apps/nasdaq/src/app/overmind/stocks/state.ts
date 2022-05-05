import { IStocks } from '@alaamu/api-interfaces';

export type State = {
  isLoading: boolean;
  stocks: IStocks[];
  singleStock: IStocks;
};
export const state: State = {
  isLoading: false,
  stocks: [],
  singleStock: {
    ticker: '',
    fullName: '',
  },
};
