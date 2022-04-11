import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'services/api';
import styles from './Navigation.module.css'

const Navigation = () => {
  const dispatch = useDispatch();
  const { token, isLoggedIn } = useSelector(state => state.users);

  const logoutHandler = event => {
    event.preventDefault();
    dispatch(logoutUser(token));
  };

  return (
    <header className={styles.navigation}>
      <NavLink
        className={navData =>
          navData.isActive ? `${styles.active}` : `${styles.basic}`
        }
        to="/"
      >
        Home page
      </NavLink>
      <nav className={styles.navigation_panel}>
        <ul className={styles.navigation_list}>
          {!isLoggedIn && (
            <li className={styles.navigation_item}>
              <NavLink
                className={navData =>
                  navData.isActive ? `${styles.active}` : `${styles.basic}`
                }
                to={'/register'}
              >
                Register
              </NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink
                className={navData =>
                  navData.isActive ? `${styles.active}` : `${styles.basic}`
                }
                to={'/login'}
              >
                Login
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink
                className={navData =>
                  navData.isActive ? `${styles.active}` : `${styles.basic}`
                }
                to={'/contacts'}
              >
                Contacts
              </NavLink>
            </li>
          )}
          {isLoggedIn && <button className={styles.logout_button} onClick={logoutHandler}>Logout</button>}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation