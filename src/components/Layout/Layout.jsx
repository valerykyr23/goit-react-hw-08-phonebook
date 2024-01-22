import { NavLink, Outlet } from "react-router-dom";
import css from "./Layout.module.css"

const Layout = () => {
    return (
        <div>
            <nav >
                <span className={css.navItem}>
                    <span>
                        <i data-feather="home"></i>
                    </span>
                    <NavLink to = "/"> Home Page</NavLink>
                </span>

                <span className={css.navItem}>
                    <span>
                        <i data-feather="home"></i>
                    </span>
                   <NavLink to="/login"> Login Page</NavLink>
                </span>
                <span className={css.navItem}>
                    <span >
                        <i data-feather="home"></i>
                    </span>
                     <NavLink to = "/register"> Sign up</NavLink>
                </span>
                <span className={css.navItem}>
                    <span >
                        <i data-feather="home"></i>
                    </span>
                   <NavLink to = "/contacts"> My Contacts</NavLink>
                </span>
        
        
       
        
            </nav>


            

            <main>
                <Outlet/>
            </main>
        </div>
    )
};

export default Layout;