export class ValueObject<T> {
  private _value: T;

  protected constructor( value : T ) {
    this._value = value;
  }

  public get value(): T {
    return this._value;
  }
}
