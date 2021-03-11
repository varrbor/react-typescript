import React from 'react';
import styles from './RegisterForm.module.scss';
import preloader from '../../assets/icons/loading-blue.gif';
import  { IRegisterForm, INameInput } from '../../store/reducers/register';
import cx from 'classnames';

interface RegisterFormProps {
  items: {id:string, config:any} [];
  onChange: (event: React.MouseEvent<HTMLButtonElement>, id:any)=>void;
  orderHandler: (event: any)=>void;
}

const RegisterForm: React.FC<RegisterFormProps> = (props) => {
  const { items, onChange, orderHandler } = props;
  return (
    <div className={styles.registerForm}>
      <div className={styles.formContainer}>
        <div className={cx(styles.head, styles.centerText)}>Create a new Account</div>
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
        </form>
        <div className={styles.or}>
          <p><span>or</span></p>
        </div>
        <div className={cx(styles.socialCard, styles.google)}>
          <p><i className="fab fa-google fa-1x"></i> <a href="#"> Sign-in with Google</a></p>
        </div>
        <div className={cx(styles.socialCard, styles.facebook)}>
          <p><i className="fab fa-facebook fa-1x"></i><a href="#">Sign-up with facebook</a></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
