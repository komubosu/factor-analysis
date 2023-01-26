import styles from './App.module.scss';

import { Routes, Route, Link } from 'react-router-dom';

import Lobby from '../Lobby/Lobby';
import Main from '../Main/Main';
import Header from '../Header/Header';
import CreateFA from '../CreateFA/CreateFA';
import FAList from '../FAList/FAList';
import { useAppSelector } from '../../hook';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import FA from '../FA/FA';

const App = () => {
  const user = useAppSelector(state => state.user);

  return (
    <div className={styles.app}>
      <Routes>
        <Route
          element={
            <ProtectedRoute isProtected={user.isLoggin} redirectPath='user' />
          }
        >
          <Route path='/*' element={<Lobby />} />
        </Route>
        <Route
          element={
            <ProtectedRoute isProtected={!user.isLoggin} redirectPath='/' />
          }
        >
          <Route
            path='user'
            element={
              <>
                <Header />
                <Main />
              </>
            }
          >
            <Route path='' element={<FAList />} />
            <Route path='fa-create' element={<CreateFA />} />
            <Route path='fa' element={<FA />} />
          </Route>
        </Route>

        <Route
          path='404'
          element={
            <div>
              <h1>404</h1>
              <Link to='/'>Назад</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
