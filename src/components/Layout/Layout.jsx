import AuthNav from 'components/AuthNav/AuthNav';
import UserNav from 'components/UserNav/UserNav';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectUserName } from 'some/auth/auth-selectors';
import css from './Layout.module.css';

const Layout = () => {


  const uname = useSelector(selectUserName);

  return (
    <div >
      <header>
          <nav >
            
        <NavLink to="/" className={css.link}> Home Page</NavLink> {uname ? <UserNav/> : <AuthNav/>}
  
      </nav>
</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
