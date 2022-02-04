import { Exception } from '../Exception';

type Message =
  'Name must be at least 2 characters long' |
  'Name must be less than 20 characters long' |
  'Name must be a string' |
  'Name only contains letters';

export class NameExceptions extends Exception {
  constructor( message: Message ) {
    const name = 'NameExceptions';
    super( name, message );
  }
}
