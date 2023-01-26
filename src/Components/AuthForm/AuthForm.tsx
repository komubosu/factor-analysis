import styles from './AuthForm.module.scss';

const AuthForm = ({
  children,
  tittle,
}: {
  children: JSX.Element[];
  tittle: string;
}) => {
  return (
    <form className={styles.authForm}>
      <h2 className={styles.title}>{tittle}</h2>
      {children}
    </form>
  );
};

export default AuthForm;
