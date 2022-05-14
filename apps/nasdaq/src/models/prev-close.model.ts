import { IPrevCloseDetails } from '../interfaces/prev-close.interface';

export default class PrevCloseModel implements IPrevCloseDetails {
  constructor(
    public close: number,
    public high: number,
    public low: number,
    public open: number,
    public volume: number
  ) {
    this.close = close;
    this.high = high;
    this.low = low;
    this.open = open;
    this.volume = volume;
  }
}
