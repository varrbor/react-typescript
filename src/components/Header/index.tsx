import React from 'react';
import styles from './Header.module.scss';
import preloader from '../../assets/icons/loading-blue.gif';
// import  { IRegisterForm } from '../../store/reducers/register';
import cx from 'classnames';
import { logOutUser } from '../../store/actions/auth';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { getApp } from '../../store/reducers/app';


const Header: React.FC = () => {
  const  { authorized } = useSelector(getApp, shallowEqual);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logOutUser());
  };
  return (
    <div className={styles.navContainer}>
      <nav>
        <div >
          <h1>ToDo</h1>
        </div>
        <ul>
          <li><a href="#">Profile</a></li>
          {authorized ? <li><a onClick={logoutHandler}>Sign-Out</a></li> : <li><a >Sign-In</a></li>}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
