import { useSelector } from 'react-redux';
const { Navigate } = require('react-router-dom');
const { selectIsLoggedIn } = require('some/auth/auth-selectors');

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
};
