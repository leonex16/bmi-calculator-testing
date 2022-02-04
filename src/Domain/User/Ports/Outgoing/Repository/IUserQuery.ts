import { User } from "@Domain/User/User";

export interface IUserQuery {
  getUser(id: string): Promise<User>;
  getUsers(): Promise<User[]>;
}