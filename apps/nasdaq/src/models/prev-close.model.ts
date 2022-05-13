import { IPrevCloseDetails } from '../interfaces/prev-close.interface';

export default class PrevCloseModel implements IPrevCloseDetails {
  constructor(
    public close: number,
    public open: number,
    public low: number,
    public high: number,
    public volume: number
  ) {
    this.close = close;
    this.open = open;
    this.low = low;
    this.high = high;
    this.volume = volume;
  }
}
