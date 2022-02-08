/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable class-methods-use-this */
import { IUserRequest } from '@Domain/User/Ports/Incoming/IUserRequest';
import { INotification } from '@Domain/User/Ports/Outgoing/Libs/INotification';
import { User } from '@Domain/User/User';
import { calculateBMIUseCaseImpl } from '@Infrastructure/User/Adapters/Primary/calculateBMIUseCaseImpl';
import { createUserUseCaseImpl } from '@Infrastructure/User/Adapters/Primary/createUserUseCaseImpl';
import { getStateWeightUseCase } from '@Infrastructure/User/Adapters/Primary/getStateWeightUseCaseImpl';

export class UserService {
  private _user: User | null = null;

  private _notify: INotification;

  constructor( notify: INotification, userRequest: IUserRequest ) {
    this._user = this.createUser( userRequest );
    this._notify = notify;
  }

  get user(): User {
    if ( this._user === null ) {
      this._notify.error( 'User is not created' );
      throw new Error();
    }

    return this._user;
  }

  get bmi(): number {
    let bmi = 0;
    try {
      bmi = this.setBmi();
    } catch ( error:any ) {
      this._notify.error( error.message );
    }

    return bmi;
  }

  get statusWeight(): string {
    let statusWeight = '';
    try {
      statusWeight = this.setStatusWeight() ?? '';
      this._notify.success( statusWeight );
    } catch ( error:any ) {
      this._notify.error( error.message );
    }

    return statusWeight;
  }

  private createUser( userRequest: IUserRequest ): User | null {
    return createUserUseCaseImpl( userRequest );
  }

  private setBmi() {
    return calculateBMIUseCaseImpl( this.user! );
  }

  private setStatusWeight() {
    return getStateWeightUseCase( this.bmi! );
  }
}
