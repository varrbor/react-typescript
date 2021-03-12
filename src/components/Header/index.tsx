import React from 'react';
import styles from './Header.module.scss';
import preloader from '../../assets/icons/loading-blue.gif';
// import  { IRegisterForm } from '../../store/reducers/register';
import cx from 'classnames';


const Header: React.FC = () => {

  return (
    <div className={styles.navContainer}>
      <nav>
        <div >
          <h1>MyApp.</h1>
        </div>
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="/sigin.html">Sign-In</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
