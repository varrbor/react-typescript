import React from 'react';
import styles from './LoginForm.module.scss';
import preloader from '../../assets/icons/loading-blue.gif';
// import  { IRegisterForm } from '../../store/reducers/register';
import cx from 'classnames';

interface LoginFormProps {
  items: {id:string, config:any} [];
  onChange: (event: React.MouseEvent<HTMLButtonElement>, id:any)=>void;
  orderHandler: (event: any)=>void;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { items, onChange, orderHandler } = props;
  return (
    <div className={styles.registerForm}>
      <div className={styles.formContainer}>
        <div className={cx(styles.head, styles.centerText)}>Sign-In to MyApp</div>
        <form className={styles.card} onSubmit={orderHandler}>
          {
            items.map(input=>(
              <div key={input.id} className={styles.formController}>
                <input
                  onChange={(event:any) => onChange(event, input.id)}
                  type={input.config.elementType}
                  placeholder={input.config.elementConfig.placeholder}
                  value={input.config.elementConfig.value}/>
              </div>
            ))
          }
          <div>
            <input className={styles.btn} type="submit" value="Sign-up" />
          </div>
          <small>
            <a href="#">Forgotten password?</a>
          </small>
        </form>
        <div className={cx(styles.card, styles.signUp)}>
          <p>
            New to MyApp?<a href="/signup.html"> Creat an account</a>
          </p>
        </div>
        <div className={styles.or}>
          <p><span>or</span></p>
        </div>
        <div className={cx(styles.socialCard, styles.google)}>
          <p><i className="fab fa-google fa-1x"></i> <a href="#"> Sign-in with Google</a></p>
        </div>
        <div className={cx(styles.socialCard, styles.facebook)}>
          <p><i className="fab fa-facebook fa-1x"></i> <a href="#"> Sign-in with Facebook</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
