
import UserNav from 'components/UserNav/UserNav';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoading, selectIsLoggedIn} from 'some/auth/auth-selectors';
import css from './AppBar.module.css';
import { Loader } from 'components/Loader/Loader';

const AppBar = () => {
  
  const userLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);

  return (
    <header>
      {isLoading && <Loader/>}

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
