import styles from './Login.module.scss';
import formStyles from '../AuthForm/AuthForm.module.scss';

import AuthForm from '../AuthForm/AuthForm';
import Button from '../Button/Button';
import { MouseEvent } from 'react';
import { useAppDispatch } from '../../hook';
import { changeLogginStatus } from '../../store/userSlice';

const Login = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    dispatch(changeLogginStatus());
    event.preventDefault();
  };

  return (
    <div className={styles.login}>
      <AuthForm tittle='Вход'>
        <input
          className={formStyles.input}
          type='text/email'
          placeholder='Email / Логин'
        />
        <input
          className={formStyles.input}
          type='password'
          placeholder='Пароль'
        />
        <div className={styles.field}>
          <p className={styles.link}>Забыли пароль?</p>
          <Button
            onClick={onSubmit}
            tittle='Войти'
            buttonColor='blue'
            buttonSize='small'
            textSize='small'
          ></Button>
        </div>
      </AuthForm>
    </div>
  );
};

export default Login;
