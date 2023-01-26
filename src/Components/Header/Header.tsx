import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Факторный анализ</h1>
      <div className={styles.account}>
        <p className={styles.text}>Личный кабинет</p>
        <div className={styles.avatar}></div>
      </div>
    </header>
  );
};

export default Header;
