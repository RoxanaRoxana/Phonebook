import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { signupUser } from '../services/api';

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
    <section >
      <h1>Register</h1>
      <form onSubmit={submitHandler}>
        <div >
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required ref={nameInputRef} />
        </div>
        <div >
          <label htmlFor="email">Your e-mail</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div >
          <label htmlFor="password">Your password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div >
          <button type="submit">Register</button>
        </div>
      </form>
    </section>
  );
};

export default Register;
