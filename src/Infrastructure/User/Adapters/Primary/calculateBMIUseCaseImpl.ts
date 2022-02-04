import { User } from '@Domain/User/User';
import { ICalculateBMIUseCase } from '@Domain/User/UseCases/ICalculateBMIUseCase';

export const calculateBMIUseCaseImpl: ICalculateBMIUseCase = ( user: User ): number => {
  const { height, weight } = user;

  return weight / height ** 2;
};
