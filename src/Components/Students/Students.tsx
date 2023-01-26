import styles from './Students.module.scss';

import Button from '../Button/Button';
import Student from './Student/Student';
import { useAppDispatch, useAppSelector } from '../../hook';
import { changeNewStudentStatus } from '../../store/faCreateSlice';

const Students = () => {
  const faCreate = useAppSelector(state => state.faCreate);
  const dispatch = useAppDispatch();

  const handleAddStudent = () => {
    dispatch(changeNewStudentStatus());
  };

  return (
    <ul className={styles.list}>
      {faCreate.students.map((student, index) => (
        <Student student={student} index={index} key={index} />
      ))}
      <li className={styles.button}>
        <Button
          onClick={handleAddStudent}
          tittle='+ Добавить ученика'
          buttonColor='blue'
          buttonSize='medium'
          textSize='small'
        />
      </li>
    </ul>
  );
};

export default Students;
