import { Adapter } from '../interfaces/adapter';
import { IPrevClose } from '../interfaces/prev-close-response.interface';
import PrevCloseModel from '../models/prev-close.model';

export class PrevCloseAdapter implements Adapter<IPrevClose, PrevCloseModel> {
  adaptApi(response: IPrevClose): PrevCloseModel {
    return new PrevCloseModel(
      response.c,
      response.h,
      response.l,
      response.o,
      response.v
    );
  }
}
