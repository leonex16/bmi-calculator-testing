interface TitleProps {
  text: string
}

export function Title( { text }: TitleProps ) {
  return (
    <h1>{ text }</h1>
  );
}
