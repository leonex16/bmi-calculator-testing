import { AgeExceptions } from '../Exceptions/AgeExceptions ';
import { ValueObject } from '../ValueObject';

type AgeType = string | number;

export class Age extends ValueObject<AgeType> {
  static create( value: AgeType ): Age {
    if ( typeof value !== 'number' && Number.isNaN( value ) === true ) {
      throw new AgeExceptions( 'Age must be a number' );
    }

    if ( value < 10 ) {
      throw new AgeExceptions( 'Age must be at least 10 years old' );
    }

    if ( value > 120 ) {
      throw new AgeExceptions( 'Age must be less than 120 years old' );
    }

    return new Age( value );
  }
}
