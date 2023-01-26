import styles from './FAList.module.scss';

import Searchbar from '../Searchbar/Searchbar';
import { useAppSelector } from '../../hook';
import FAItem from './FAItem/FAItem';

const FAList = () => {
  const user = useAppSelector(state => state.user);

  return (
    <>
      <Searchbar />
      <ul className={styles.list}>
        {user.fas.map((fa, index) => (
          <FAItem fa={fa} index={index} key={index} />
        ))}
      </ul>
    </>
  );
};

export default FAList;
