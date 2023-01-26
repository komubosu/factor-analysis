import styles from './AddStudent.module.scss';

import { ChangeEvent, FormEvent, useState } from 'react';

import Button from '../../Button/Button';
import { useAppDispatch, useAppSelector } from '../../../hook';
import {
  addNewStudent,
  changeNewStudentStatus,
  changeStudentAnswer,
  changeStudentInfo,
  resetNewStudent,
} from '../../../store/faCreateSlice';

const Input = ({
  label,
  value,
  onChange,
  id,
  placeholder,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  placeholder: string;
  type?: string;
}) => {
  return (
    <label>
      <p className={styles.label}>{label}</p>
      <input
        className={styles.input}
        value={value}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        type={type}
        required
      />
    </label>
  );
};

const AddStudent = () => {
  const [isValid, setIsValid] = useState(false);
  const student = useAppSelector(state => state.faCreate.newStudent);
  const dispatch = useAppDispatch();

  const handleChangeInfoValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;

    dispatch(changeStudentInfo({ key: id, value }));

    const form = e.currentTarget.closest('form');

    if (form) {
      setIsValid(form.checkValidity());
    }
  };

  const handleChangeQuestionValue = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;

    dispatch(changeStudentAnswer({ index, value }));

    const form = e.currentTarget.closest('form');

    if (form) {
      setIsValid(form.checkValidity());
    }
  };

  const saveNewStudent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addNewStudent());
    dispatch(changeNewStudentStatus());
    setTimeout(() => dispatch(resetNewStudent()), 10);
  };

  return (
    <form className={styles.form} onSubmit={saveNewStudent}>
      <h2 className={styles.title}>{student.name || 'Ученик 1'}</h2>
      <h3 className={styles.subtitle}>Данные ученика</h3>
      <h3 className={styles.subtitle}>Данные ФА</h3>
      <div className={styles.column}>
        <Input
          label='ФИО'
          value={student.name}
          onChange={handleChangeInfoValue}
          id='name'
          placeholder='Введите ФИО'
        />
        <Input
          label='Класс'
          value={student.class}
          onChange={handleChangeInfoValue}
          id='class'
          placeholder='Введите класс'
        />
        <Input
          label='Школа'
          value={student.school}
          onChange={handleChangeInfoValue}
          id='school'
          placeholder='Введите школу'
        />
        <Input
          label='Возраст (лет)'
          value={student.age}
          onChange={handleChangeInfoValue}
          id='age'
          placeholder='Введите возраст'
          type='number'
        />
      </div>
      <div className={styles.column}>
        {student.questions.map((question, index) => (
          <Input
            key={index}
            label={question.title}
            value={question.answer}
            onChange={e => handleChangeQuestionValue(e, index)}
            placeholder='Введите ответ'
          />
        ))}
      </div>
      <div className={styles.button}>
        <Button
          onClick={() => {}}
          tittle='Сохранить данные'
          buttonColor='blue'
          buttonSize='medium'
          textSize='small'
          isDisable={!isValid}
        />
      </div>
    </form>
  );
};

export default AddStudent;
