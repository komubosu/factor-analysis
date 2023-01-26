import styles from './CreateFA.module.scss';

import { useNavigate } from 'react-router-dom';
import { ChangeEvent } from 'react';

import Button from '../Button/Button';
import Students from '../Students/Students';
import AddStudent from './AddStudent/AddStudent';
import { useAppDispatch, useAppSelector } from '../../hook';
import {
  changeNewStudentStatus,
  changeTitle,
  resetNewStudent,
  resetState,
} from '../../store/faCreateSlice';
import { addFa } from '../../store/userSlice';

const CreateFA = () => {
  const faCreate = useAppSelector(state => state.faCreate);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    dispatch(changeTitle(value));
  };

  const handleAddStudent = () => {
    dispatch(resetNewStudent());
    dispatch(changeNewStudentStatus());
  };

  const saveFa = () => {
    const { title, students } = faCreate;

    dispatch(addFa({ title, students }));

    setTimeout(() => endFaCreate(), 10);
  };

  const endFaCreate = () => {
    dispatch(resetState());
    navigate(-1);
  };

  return (
    <div className={styles.create}>
      {faCreate.isNewStudent ? (
        <button className={styles.button} onClick={handleAddStudent} />
      ) : (
        <button className={styles.button} onClick={endFaCreate} />
      )}
      <input
        className={styles.input}
        value={faCreate.title}
        onChange={handleChangeTitle}
        type='text'
        placeholder='Введите название ФА'
      />
      <Button
        onClick={saveFa}
        tittle='Сохранить ФА'
        buttonColor='blue'
        buttonSize='medium'
        textSize='small'
        isDisable={
          faCreate.title && faCreate.students.length !== 0 ? false : true
        }
      />
      {faCreate.isNewStudent ? <AddStudent /> : <Students />}
    </div>
  );
};

export default CreateFA;
