import React from 'react';
import styles from './Preloader.module.scss';
import preloader from '../../assets/icons/loading-blue.gif';

const Preloader = () => {
  return (
    <>
      <div className={styles.root}>
        <img className={styles.image} src={preloader} alt="icon" />
      </div>
      <div className={styles.background} />
    </>
  );
};

export default Preloader;
