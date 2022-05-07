import React from 'react';
import styles from '../components/login/Login.module.css';
import image from '../images/image.png';

const HomePage = () => {
  return (
    <div className={styles.login_section}>
      <h2 className={styles.title}> Phonebook </h2>
      <div>
        <img className={styles.photo} src={image} />
      </div>
    </div>
  );
};

export default HomePage;
