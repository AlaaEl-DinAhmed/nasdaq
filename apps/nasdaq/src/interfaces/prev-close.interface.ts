import { Status } from './status-api';

export interface IPrevCloseAdapted {
  status: Status;
  resultsCount: number;
  results: IPrevCloseDetails;
}
export interface IPrevCloseDetails {
  close: number;
  open: number;
  high: number;
  low: number;
  volume: number;
}
