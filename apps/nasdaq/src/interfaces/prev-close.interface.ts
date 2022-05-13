export interface IPrevCloseAdapted {
  status: 'OK';
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
