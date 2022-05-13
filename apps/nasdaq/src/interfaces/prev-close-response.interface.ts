export interface IPrevCloseResponse {
  status: 'OK';
  resultsCount: number;
  results: IPrevClose[];
}
export interface IPrevClose {
  c: number;
  o: number;
  h: number;
  l: number;
  v: number;
}
