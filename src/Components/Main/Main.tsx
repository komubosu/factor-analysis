import styles from './Main.module.scss';

import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <section className={styles.main}>
      <Outlet />
    </section>
  );
};

export default Main;
