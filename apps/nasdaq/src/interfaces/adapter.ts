export interface Adapter<T, U> {
  adaptApi(response: T[]): U[];
}
