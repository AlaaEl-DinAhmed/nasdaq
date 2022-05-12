import { IPrevClose } from './prev-close.interface';

export interface IPrevCloseResponse {
  status: 'OK';
  resultsCount: number;
  results: IPrevClose[];
}
