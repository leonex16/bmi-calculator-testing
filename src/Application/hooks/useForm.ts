import { useState, ChangeEvent } from 'react';

type ChangeInputEvent = ChangeEvent<HTMLInputElement>;
type UseFormReturn<T> = [ T, ( _event: ChangeInputEvent ) => void ];

export const useForm = <T>( initialState: T ): UseFormReturn<T> => {
  const [ values, setValues ] = useState( initialState );

  const handleChangeInput = ( event: ChangeInputEvent ) => {
    const { name, value } = event.target;
    setValues( { ...values, [name]: value } );
  };

  return [ values, handleChangeInput ];
};
