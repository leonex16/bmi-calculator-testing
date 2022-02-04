import { HeightExceptions } from '../Exceptions/HeightExceptions ';
import { ValueObject } from '../ValueObject';

type HeightType = number;

export class Height extends ValueObject<HeightType> {
  static create( value: HeightType ): Height {
    if ( value < 0.01 ) {
      throw new HeightExceptions( 'Height must be at least 0.01 mts' );
    }

    if ( typeof value !== 'number' ) {
      throw new HeightExceptions( 'Height must be a number' );
    }

    return new Height( value );
  }
}
