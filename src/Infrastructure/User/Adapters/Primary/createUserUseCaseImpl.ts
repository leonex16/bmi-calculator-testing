import { User } from '@Domain/User/User';
import { ICreateUserUseCase } from '@Domain/User/UseCases/ICreateUserUseCase';
import { UUIDImpl } from '@Infrastructure/User/Adapters/Secondary/UUIDImpl';

export const createUserUseCaseImpl: ICreateUserUseCase = ( userRequest ) => {
  const id = UUIDImpl.randomId;
  const userRaw = { id, ...userRequest };

  return new User( userRaw );
};
