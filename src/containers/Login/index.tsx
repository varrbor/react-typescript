/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import styles from './Login.module.scss';
import cx from 'classnames';

const Login: React.FC = () => {
  return (
    <div className={styles.registerForm}>
      <div className={styles.formContainer}>
        <div className={cx(styles.head, styles.centerText)}>Sign-In to MyApp</div>
        <form className={styles.card} action="">
          <div className={styles.formController}>
            <input type="email" placeholder="Email address" />
          </div>
          <div className={styles.formController}>
            <input type="password" placeholder="Password" />
          </div>
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

export default Login;
