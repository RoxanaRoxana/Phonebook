import PropTypes from 'prop-types';
import PrivateRoute from 'routes/PrivateRoute';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import UserMenu from 'components/UserMenu';
import HomePage from 'pages/HomePage';
import Layout from 'components/Layout';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <UserMenu />
            </PrivateRoute>
          }
        />

        <Route
          path="*"
          element={
            <h1 className="wrong-address">There's nothing here: 404!</h1>
          }
        />
      </Routes>
    </Layout>
  );
}

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
