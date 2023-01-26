import styles from './Lobby.module.scss';

import Button from '../Button/Button';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

const Lobby = () => {
  return (
    <section className={styles.lobby}>
      <h1 className={styles.title}>Факторный анализ</h1>
      <Routes>
        <Route
          path=''
          element={
            <>
              <Link to='signin'>
                <Button
                  onClick={() => {}}
                  tittle='Вход'
                  buttonColor='white'
                  buttonSize='small'
                  textSize='large'
                ></Button>
              </Link>
              <Link to='signup'>
                <Button
                  onClick={() => {}}
                  tittle='Регистрация'
                  buttonColor='white'
                  buttonSize='large'
                  textSize='large'
                ></Button>
              </Link>
            </>
          }
        />
        <Route path='signup' element={<Register />} />
        <Route path='signin' element={<Login />} />

        <Route path='*' element={<Navigate to='404' />} />
      </Routes>
    </section>
  );
};

export default Lobby;
