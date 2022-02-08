interface ButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset';
  handleClickEvent: ( event: any ) => void;
}

export function Button( { text, type, handleClickEvent }: ButtonProps ) {
  return <button type={ type } onClick={handleClickEvent}>{text}</button>;
}
