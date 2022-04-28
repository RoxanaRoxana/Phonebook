import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
  const { token } = useSelector(state => state.users);
  const location = useLocation();

  return !token ? (
    <Navigate to="/login" replace state={{ from: location }} />
  ) : (
    children
  );
}

export default PrivateRoute;
