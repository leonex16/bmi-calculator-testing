import { NameExceptions } from '../Exceptions/NameExceptions';
import { ValueObject } from '../ValueObject';

type NameType = string;

export class Name extends ValueObject<NameType> {
  static create( value: NameType ): Name {
    const MIN_LEGTH = 2;
    const MAX_LEGTH = 20;

    if ( value.length < MIN_LEGTH ) {
      throw new NameExceptions( 'Name must be at least 2 characters long' );
    }

    if ( value.length > MAX_LEGTH ) {
      throw new NameExceptions( 'Name must be less than 20 characters long' );
    }

    if ( typeof value !== 'string' ) {
      throw new NameExceptions( 'Name must be a string' );
    }

    if ( !/^[a-zA-Z]+$/.test( value )) {
      throw new NameExceptions( 'Name only contains letters' );
    }

    return new Name( value );
  }
}
