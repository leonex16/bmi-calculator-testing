import { IUserRequest } from '@Domain/User/Ports/Incoming/IUserRequest';
import { User } from '@Domain/User/User';

export type ICreateUserUseCase = ( _userRequest: IUserRequest ) => User | null;
