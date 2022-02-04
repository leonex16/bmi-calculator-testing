import { Exception } from '../Exception';

type Message =
  'Age must be at least 10 years old' |
  'Age must be less than 120 years old' |
  'Age must be a number';

export class AgeExceptions extends Exception {
  constructor( message: Message ) {
    const name = 'AgeExceptions';
    super( name, message );
  }
}
