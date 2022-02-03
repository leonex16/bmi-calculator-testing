import { User } from '@Domain/User/Core/User';
import { ICalculateBMIUseCase } from './ICalculateBMIUseCase';

export const calculateBMIUseCaseImpl: ICalculateBMIUseCase = ( user: User ): number => {
  const { height, weight } = user;

  return weight / height ** 2;
};
