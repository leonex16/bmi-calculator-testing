import { HeightExceptions } from '../Exceptions/HeightExceptions ';
import { ValueObject } from '../ValueObject';

type HeightType = string | number;

export class Height extends ValueObject<HeightType> {
  static create( value: HeightType ): Height {
    if ( typeof value !== 'number' && Number.isNaN( value ) === true ) {
      throw new HeightExceptions( 'Height must be a number' );
    }

    if ( value < 0.01 ) {
      throw new HeightExceptions( 'Height must be at least 0.01 mts' );
    }

    return new Height( value );
  }
}
