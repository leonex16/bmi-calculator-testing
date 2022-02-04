import { User } from "@Domain/User/User";

export interface IUserCommand {
  createUser(userRequest: User): Promise<User>;
  editUser(userRequest: User): Promise<User>;
  deleteUser(userRequest: User): Promise<User>;
}