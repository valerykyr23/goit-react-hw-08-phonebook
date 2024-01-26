import UserNav from 'components/UserNav/UserNav';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'some/auth/auth-selectors';
import css from './AppBar.module.css';
// import { Loader } from 'components/Loader/Loader';
import { IoMdHome } from "react-icons/io";
import { RiContactsBookFill } from "react-icons/ri";
import { RiLoginBoxFill } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";

const AppBar = () => {
  const userLoggedIn = useSelector(selectIsLoggedIn);
  // const isLoading = useSelector(selectIsLoading);

  return (
    <header>
      {/* {isLoading && <Loader />} */}
<div className={css.appContainer}>
      <nav className={css.appNav}>

        <div className={css.rightSideNavApp}>
        <NavLink to="/" className={css.navLink}>
          Home
            </NavLink>
            <IoMdHome className={css.decorIcon} />

          <NavLink className={css.navLink} to="/contacts">
            Contacts
          </NavLink>
        <RiContactsBookFill className={css.decorIcon}/>
            
        </div>
        
        <div>
        {userLoggedIn ? (
          <UserNav />
        ) : (
          <div className={css.leftSideNavApp}>
            <NavLink to="/register" className={css.navLink}>
              Register
                  </NavLink>
                  <MdManageAccounts className={css.decorIcon}/>
                 
            <NavLink className={css.navLink} to="/login">
              Log in
                  </NavLink>
                  <RiLoginBoxFill className={css.decorIcon}/>
          </div>
          )}
          </div>
        </nav>
        </div>
    </header>
  );
};

export default AppBar;
