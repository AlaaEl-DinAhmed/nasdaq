import { IStocksResponse } from '@alaamu/api-interfaces';

export type State = {
  isLoading: boolean;
  stocks: IStocksResponse;
};
export const state: State = {
  isLoading: false,
  stocks: {
    results: [],
    status: '',
    request_id: '',
    count: 0,
    next_url: '',
  },
};
