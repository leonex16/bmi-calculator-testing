import { AgeExceptions } from '../Exceptions/AgeExceptions ';
import { ValueObject } from '../ValueObject';

type AgeType = number;

export class Age extends ValueObject<AgeType> {
  static create( value: AgeType ): Age {
    if ( value < 10 ) {
      throw new AgeExceptions( 'Age must be at least 10 years old' );
    }

    if ( value > 120 ) {
      throw new AgeExceptions( 'Age must be less than 120 years old' );
    }

    if ( typeof value !== 'number' ) {
      throw new AgeExceptions( 'Age must be a number' );
    }

    return new Age( value );
  }
}
