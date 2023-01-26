import { useAppSelector } from '../../hook';
import Button from '../Button/Button';
import Student from '../Students/Student/Student';
import styles from './FA.module.scss';

const FA = () => {
  const { openedFa } = useAppSelector(state => state.user);

  return (
    <div className={styles.fa}>
      <button className={styles.button} />
      <input
        className={styles.input}
        value={openedFa.title}
        // onChange={handleChangeTitle}
        type='text'
        placeholder='Введите название ФА'
        disabled
      />
      <Button
        onClick={() => {}}
        tittle='Редактировать ФА'
        buttonColor='blue'
        buttonSize='medium'
        textSize='small'
      />
      <Button
        onClick={() => {}}
        tittle='Отправить ФА'
        buttonColor='blue'
        buttonSize='medium'
        textSize='small'
      />
      <ul className={styles.students}>
        {openedFa.students.map((student, index) => (
          <li key={index} className={styles.student}>
            <div className={styles.main}>
              <p className={styles.name}>
                {index + 1 + '. '}
                {student.name}
              </p>
            </div>
            <div className={styles.optional}>
              <p className={styles.text}>
                Класс: <span>{student.class}</span>
              </p>
              <p className={styles.text}>
                Школа: <span>{student.school}</span>
              </p>
              <p className={styles.text}>
                Возраст: <span>{student.age}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FA;
