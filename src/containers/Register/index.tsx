/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styles from './Register.module.scss';
import cx from 'classnames';

const Register: React.FC = () => {
  return (
    <div className={styles.registerForm}>
      <div className={styles.formContainer}>
        <div className={cx(styles.head, styles.centerText)}>Create a new Account</div>
        <form className={styles.card} action="">
          <div className={styles.formController}>
            <input type="text" placeholder="First Name" />
          </div>
          <div className={styles.formController}>
            <input type="email" placeholder="Email address" />
          </div>
          <div className={styles.formController}>
            <input type="password" placeholder="Password" />
          </div>
          <div className={styles.formController}>
            <input type="password" placeholder="Confirm password" />
          </div>
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

export default Register;
