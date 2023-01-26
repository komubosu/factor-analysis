import { useAppDispatch } from '../../../hook';
import {
  changeNewStudentStatus,
  deleteStudent,
  openStudent,
} from '../../../store/faCreateSlice';
import styles from './Student.module.scss';
import { MouseEvent } from 'react';

const Student = ({
  student,
  index,
}: {
  student: { name: string };
  index: number;
}) => {
  const dispatch = useAppDispatch();

  const handleClickStudent = () => {
    dispatch(openStudent(index));
    dispatch(changeNewStudentStatus());
  };

  const handleDeleteStudent = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(deleteStudent(index));
  };

  return (
    <li className={styles.item} onClick={handleClickStudent}>
      <p className={styles.name}>
        {index + 1 + '. '}
        {student.name}
      </p>
      <button className={styles.button} onClick={handleDeleteStudent}>
        Удалить
      </button>
    </li>
  );
};

export default Student;
