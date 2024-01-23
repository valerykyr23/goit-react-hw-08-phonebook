import css from "./AppBar.module.css";

const AppBar = () => {

    return (
        <header className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
};

export default AppBar;