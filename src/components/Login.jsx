import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';


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
    <section >
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
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
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
