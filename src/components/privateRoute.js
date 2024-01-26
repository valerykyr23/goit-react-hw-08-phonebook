import { useSelector } from "react-redux";
const { Navigate } = require("react-router-dom");
const { selectIsLoggedIn, selectUserToken } = require("some/auth/auth-selectors")


export const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    // const userToken = useSelector(selectUserToken);
    return isLoggedIn ? children : <Navigate to="/login"/>
}
