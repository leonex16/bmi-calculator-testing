import { Exception } from '../Exception';

type Message =
  'Status not found for your BMI';

export class StatusWeightExceptions extends Exception {
  constructor( message: Message ) {
    const name = 'StatusWeightExceptions';
    super( name, message );
  }
}
