import { WeightExceptions } from '../Exceptions/WeightExceptions ';
import { ValueObject } from '../ValueObject';

type WeightType = string | number;

export class Weight extends ValueObject<WeightType> {
  static create( value: WeightType ): Weight {
    if ( typeof value !== 'number' && Number.isNaN( value ) === true ) {
      throw new WeightExceptions( 'Weight must be a number' );
    }

    if ( value < 1 ) {
      throw new WeightExceptions( 'Weight must be at least 1 kg' );
    }

    return new Weight( value );
  }
}
