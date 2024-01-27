import { useSelector } from 'react-redux';
const { Navigate, useLocation } = require('react-router-dom');
const { selectIsLoggedIn } = require('some/auth/auth-selectors');

export const PublicteRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { state } = useLocation();
  return !isLoggedIn ? children : <Navigate to={state ? state : '/'} />;
};
