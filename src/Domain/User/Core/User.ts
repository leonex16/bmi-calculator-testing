export class User {
  private readonly _id: string;

  private readonly _name: string;

  private readonly _age: number;

  private readonly _height: number;

  private readonly _weight: number;

  constructor( name: string, age: number, height: number, weight: number ) {
    this._id = '';
    this._name = name;
    this._age = age;
    this._height = height;
    this._weight = weight;
  }

  get height(): number {
    return this._height;
  }

  get weight(): number {
    return this._weight;
  }
}
