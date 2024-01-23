const { NavLink } = require("react-router-dom");
import css from "./AuthNav.module.css";


const AuthNav = () => {

    return (
        <div>
            <NavLink
                to="/register"
    
                className={css.link}
      
            >
                Sign up
            </NavLink>
            <NavLink
                to="/login"
   
                className={css.link}
      
            >
                Log in
            </NavLink>
        </div>
    )
};

export default AuthNav;