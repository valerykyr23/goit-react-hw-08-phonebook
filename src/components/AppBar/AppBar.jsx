
import UserNav from 'components/UserNav/UserNav';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn} from 'some/auth/auth-selectors';
import css from './AppBar.module.css';

const AppBar = () => {
  const userLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      {/* {isLoading && <Spiner />} */}

      <div  className={css.appContainer}>
              <nav className={css.appNav}>
          <div>
                     
                      <NavLink to="/" className={css.navLink}>Home</NavLink>

            {userLoggedIn && <NavLink className={css.navLink} to="/contacts">Contacts</NavLink>}
                  </div>
                  
          <div className={css.optionalMenu}>
            {userLoggedIn ? (
              <UserNav />
            ) : (
              <>
                <NavLink to="/register" className={css.navLink}>Register</NavLink>
                <NavLink  className={css.navLink} to="/login">Log in</NavLink>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AppBar;
