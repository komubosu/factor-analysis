import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hook';
import { openFa } from '../../../store/userSlice';
import styles from './FAItem.module.scss';

const FAItem = ({ fa, index }: { fa: { title: string }; index: number }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFAClick = () => {
    dispatch(openFa(index));
    navigate('fa');
  };

  return (
    <li className={styles.item} onClick={handleFAClick}>
      <h2 className={styles.title}>{fa.title}</h2>
      <p className={styles.date}>12.12.2022</p>
    </li>
  );
};

export default FAItem;
