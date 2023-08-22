export interface Message {
  type: Type;
  code: number;
  message: string;
}

export enum Type {
  INFO,
  SUCCESS,
  ERROR,
}
