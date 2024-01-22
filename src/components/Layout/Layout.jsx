import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
          <nav >
            
        <NavLink to="/" className={css.link}> Home Page</NavLink>

        <NavLink to="/contacts" className={css.link}> My Contacts</NavLink>
       
        <NavLink to="/register" className={css.link}> Sign up</NavLink>
              
        <NavLink to="/login" className={css.link}> Login Page</NavLink>
      


      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
