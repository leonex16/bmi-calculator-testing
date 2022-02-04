import { Exception } from '../Exception';

type Message =
  'Weight must be at least 1 kg' |
  'Weight must be a number';

export class WeightExceptions extends Exception {
  constructor( message: Message ) {
    const name = 'WeightExceptions';
    super( name, message );
  }
}
