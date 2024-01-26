
import { useSelector } from "react-redux";
const { Navigate, useLocation } = require("react-router-dom");
const { selectUserToken, selectIsLoggedIn } = require("some/auth/auth-selectors")


export const PublicteRoute = ({ children }) => {
  // const userToken = useSelector(selectUserToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const {state} = useLocation();
  return !isLoggedIn ? children : <Navigate to={state ? state : "/" } />
}
