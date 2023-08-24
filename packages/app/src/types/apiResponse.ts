import { type Message } from "./message";
import { type User } from "./user";

export interface ApiResponse {
  user: User;
  error: Message;
}
