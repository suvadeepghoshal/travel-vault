export interface Message {
  type: Type;
  code: number | string;
  message: string;
}

export enum Type {
  INFO,
  SUCCESS,
  ERROR,
}
