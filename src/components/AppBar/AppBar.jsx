import AuthNav from "components/AuthNav/AuthNav";
import UserNav from "components/UserNav/UserNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserName } from "some/auth/auth-selectors";
import css from "./AppBar.module.css";

const AppBar = () => {

// const isLoggedIn = useSelector(selectIsLoggedIn);

    const uname = useSelector(selectUserName);

    return (
        
        <header className={css.header}>
            <Navigation />
            {/* {uname ? <UserNav /> : <AuthNav />} */}
        </header>
    )
};

export default AppBar;