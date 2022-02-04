import { WeightExceptions } from '../Exceptions/WeightExceptions ';
import { ValueObject } from '../ValueObject';

type WeightType = number;

export class Weight extends ValueObject<WeightType> {
  static create( value: WeightType ): Weight {
    if ( value < 1 ) {
      throw new WeightExceptions( 'Weight must be at least 1 kg' );
    }

    if ( typeof value !== 'number' ) {
      throw new WeightExceptions( 'Weight must be a number' );
    }

    return new Weight( value );
  }
}
