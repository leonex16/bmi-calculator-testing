import { Exception } from '../Exception';

type Message =
  'Height must be at least 0.01 mts' |
  'Height must be a number';

export class HeightExceptions extends Exception {
  constructor( message: Message ) {
    const name = 'HeightExceptions';
    super( name, message );
  }
}
