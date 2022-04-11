import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { signupUser } from '../../services/api';
import styles from './Register.module.css'

const Register = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.users);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const origin = location.state?.from?.pathname || '/contacts';
      return navigate(origin);
    }
  }, [token, location.state?.from?.pathname, navigate]);

  const submitHandler = event => {
    event.preventDefault();
    const form = event.target;

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    dispatch(
      signupUser({
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
      })
    );

    form.reset();
  };

  return (
    <section className={styles.register_section}>
      <h1 className={styles.title}>Register</h1>
      <form className={styles.register_form} onSubmit={submitHandler}>
      
          <label className={styles.register_label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.register_input}
            type="text"
            id="name"
            required
            ref={nameInputRef}
          />
        
        
          <label className={styles.register_label} htmlFor="email">
            E-mail
          </label>
          <input
            className={styles.register_input}
            type="email"
            id="email"
            required
            ref={emailInputRef}
          />
        
      
          <label className={styles.register_label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.register_input}
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        
        
          <button className={styles.register_button} type="submit">
            Register
          </button>
        
      </form>
    </section>
  );
};

export default Register;
