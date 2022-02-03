import { useForm } from '../../hooks/useForm';
import { Button, Input, Title } from './components/_index';

export function Home() {
  const initForm = { weight: '0', height: '0' };
  const [ form, setForm ] = useForm( initForm );

  return (
    <main>
      <header>
        <Title text="BMI Calculator" />
      </header>
      <article>
        <Input id="weight" label="Weight (Kg)" type="text" value={ form.weight } handleChangeEvent={ setForm } />
        <Input id="height" label="Height (Mts)" type="text" value={ form.height } handleChangeEvent={ setForm } />
        <Button text="Calculate" type="button" />
      </article>
    </main>
  );
}
