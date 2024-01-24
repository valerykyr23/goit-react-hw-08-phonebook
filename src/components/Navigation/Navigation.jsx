import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
    </nav>
  );
};

export default Navigation;
