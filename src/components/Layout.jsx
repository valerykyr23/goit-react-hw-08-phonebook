import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <nav>
        <NavLink to = "/"> Home Page</NavLink>
        <NavLink to="/login"> Login Page</NavLink>
        <NavLink to = "/register"> Sign up</NavLink>
        <NavLink to = "/contacts"> My Contacts</NavLink>
            </nav>
            <main>
                <Outlet/>
            </main>
        </div>
    )
};

export default Layout;