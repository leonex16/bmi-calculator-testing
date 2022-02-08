import { IUUID } from '@Domain/User/Ports/Outgoing/Libs/IUUID';
import { Age } from '@Domain/User/ValueObjects/Age';
import { Height } from '@Domain/User/ValueObjects/Height';
import { Name } from '@Domain/User/ValueObjects/Name';
import { Weight } from '@Domain/User/ValueObjects/Weight';

type UserProps = {
  id: IUUID,
  name: string,
  age: string | number,
  height: string | number,
  weight: string | number
}

export class User {
  private readonly _id: string;

  private readonly _name: Name;

  private readonly _age: Age;

  private readonly _height: Height;

  private readonly _weight: Weight;

  constructor( {
    id, name, age, height, weight,
  }: UserProps ) {
    this._id = id.generate();
    this._name = Name.create( name );
    this._age = Age.create( age );
    this._height = Height.create( height );
    this._weight = Weight.create( weight );
  }

  get name(): string {
    return this._name.value;
  }

  get age(): number {
    return Number( this._age.value );
  }

  get height(): number {
    return Number( this._height.value );
  }

  get weight(): number {
    return Number( this._weight.value );
  }
}
