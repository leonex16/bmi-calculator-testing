import { IUserRequest } from "@Domain/User/Ports/Incoming/IUserRequest";
import { User } from "@Domain/User/User";
import { calculateBMIUseCaseImpl } from "@Infrastructure/User/Adapters/Primary/calculateBMIUseCaseImpl";
import { createUserUseCaseImpl } from "@Infrastructure/User/Adapters/Primary/createUserUseCaseImpl";
import { getStateWeightUseCase } from "@Infrastructure/User/Adapters/Primary/getStateWeightUseCaseImpl";

export class userService {
  public user: User | null = null;
  public bmi: number | null = 0;
  public statusWeight: string | null = null;

  constructor(userRequest: IUserRequest) {
    this.user = this.createUser(userRequest);
    this.bmi = this.setBmi();
    this.statusWeight = this.setStatusWeight();
  }

  private createUser(userRequest: IUserRequest): User {
    return createUserUseCaseImpl(userRequest);
  }

  private setBmi() {
    return calculateBMIUseCaseImpl(this.user!);
  }

  private setStatusWeight() {
    return getStateWeightUseCase(this.bmi!);
  }
}
