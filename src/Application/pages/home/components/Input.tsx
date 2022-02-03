interface InputProps {
  id: string,
  label: string;
  type: 'text' | 'number';
  value: string;
  handleChangeEvent: any;
}

export function Input( props : InputProps ) {
  const {
    id, label, type, value, handleChangeEvent,
  } = props;

  return (
    <div className="form-control">
      <label htmlFor={ id }>{ label }</label>
      <input id={ id } name={ id } type={ type } value={ value } onChange={ handleChangeEvent } />
    </div>
  );
}
