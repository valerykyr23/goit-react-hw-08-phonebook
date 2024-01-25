// import AuthNav from 'components/AuthNav/AuthNav';
// import UserNav from 'components/UserNav/UserNav';
// import { useSelector } from 'react-redux';
// import { NavLink, Outlet } from 'react-router-dom';
// import { selectUserName } from 'some/auth/auth-selectors';
// import css from './Layout.module.css';
import AppBar from "components/AppBar/AppBar";
import { Outlet } from "react-router-dom";

const Layout = () => {


  

  return (
    <>
      
      <AppBar />
    
        <Outlet />
     
    </>
  );
};

export default Layout;
