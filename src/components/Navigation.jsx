import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'services/api';

const Navigation = () => {
  const dispatch = useDispatch();
  const { token, isLoggedIn } = useSelector(state => state.users);

  const logoutHandler = event => {
    event.preventDefault();
    dispatch(logoutUser(token));
  };

  return (
    <header>
      <NavLink
        // className={navData =>
        //   navData.isActive ? `${classes.active}` : `${classes.logo}`
        // }
        to="/"
      >
        Home page
      </NavLink>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <NavLink
                // className={navData =>
                //   navData.isActive ? `${classes.active}` : `${classes.logo}`
                // }
                to={'/register'}
              >
                Register
              </NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink
                // // className={navData =>
                // //   navData.isActive ? `${classes.active}` : `${classes.logo}`
                // // }
                to={'/login'}
              >
                Login
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink
                // className={navData =>
                //   navData.isActive ? `${classes.active}` : `${classes.logo}`
                // }
                to={'/contacts'}
              >
                Contacts
              </NavLink>
            </li>
          )}
          {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation