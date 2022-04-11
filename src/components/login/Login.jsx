import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/api';
import styles from './Login.module.css'


const Login = () => {
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

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    dispatch(
      loginUser({
        email: enteredEmail,
        password: enteredPassword,
      })
    );

    form.reset();
  };
  return (
    <section className={styles.login_section}>
      <h1 className={styles.title} >Login</h1>
      <form className={styles.login_form} onSubmit={submitHandler}>
        <div >
          <label className={styles.login_label} htmlFor="email">E-mail</label>
          <input className={styles.login_input} type="email" id="email" required ref={emailInputRef} />
        </div>
        <div >
          <label className={styles.login_label} htmlFor="password">Password</label>
          <input className={styles.login_input}
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div >
          <button className={styles.login_button} type="submit">Login</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
