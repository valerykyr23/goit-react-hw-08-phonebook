import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className={css.link}>
        Sign up
      </NavLink>
      <NavLink to="/login" className={css.link}>
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
