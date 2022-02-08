import { NotificationImpl } from '@Infrastructure/User/Adapters/Secondary/NotificationImpl';
import { useForm } from '../../hooks/useForm';
import { UserService } from '../../services/userService';
import { Button, Input, Title } from './components/_index';

export function Home() {
  const initForm = {
    name: '', age: '18', weight: '0', height: '0',
  };
  const [ form, setForm ] = useForm( initForm );

  const handleClick = () => {
    const notification = NotificationImpl.reactToastify;
    const userService = new UserService( notification, form );

    return userService.statusWeight;
  };

  return (
    <main>
      <header>
        <Title text="BMI Calculator" />
      </header>
      <article>
        <Input id="name" label="Name" type="text" value={ form.name } handleChangeEvent={ setForm } />
        <Input id="age" label="Age" type="text" value={ form.age } handleChangeEvent={ setForm } />
        <Input id="weight" label="Weight (Kg)" type="text" value={ form.weight } handleChangeEvent={ setForm } />
        <Input id="height" label="Height (Mts)" type="text" value={ form.height } handleChangeEvent={ setForm } />
        <Button text="Calculate" type="button" handleClickEvent={ handleClick } />
      </article>
    </main>
  );
}
