import styles from './Register.module.scss';
import formStyles from '../AuthForm/AuthForm.module.scss';

import AuthForm from '../AuthForm/AuthForm';
import Button from '../Button/Button';
import { MouseEvent } from 'react';
import { useAppDispatch } from '../../hook';
import { changeLogginStatus } from '../../store/userSlice';

const Register = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    dispatch(changeLogginStatus());
    event.preventDefault();
  };

  return (
    <div className={styles.register}>
      <AuthForm tittle='Регистрация'>
        <input className={formStyles.input} type='text' placeholder='Логин' />
        <input className={formStyles.input} type='email' placeholder='Email' />
        <input
          className={formStyles.input}
          type='password'
          placeholder='Пароль'
        />
        <label className={formStyles.label} htmlFor='permission'>
          Выберите должность
        </label>
        <select className={formStyles.input} id='permission'>
          <option>Ученик</option>
          <option>Классный руководитель</option>
          <option>Методист</option>
        </select>
        <Button
          onClick={onSubmit}
          tittle='Зарегистрироваться'
          buttonColor='blue'
          buttonSize='large'
          textSize='small'
        ></Button>
      </AuthForm>
    </div>
  );
};

export default Register;
