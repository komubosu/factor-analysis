import styles from './Searchbar.module.scss';

import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Searchbar = () => {
  return (
    <div className={styles.searchbar}>
      <input
        className={styles.input}
        type='text'
        placeholder='Введите название факторного анализа'
      />
      <button className={styles.button}></button>
      <Link to='fa-create'>
        <Button
          onClick={() => {}}
          tittle='Создать новый ФА'
          buttonColor='blue'
          buttonSize='medium'
          textSize='small'
        />
      </Link>
    </div>
  );
};

export default Searchbar;
