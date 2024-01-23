import { Button } from "@mui/material";
import css from "./UserNav.module.css";




const UserNav = () => {

  return (
    <div className={css.container}>
      <img
        src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg"
        alt="Default Avatar"
        width="32"
        className={css.avatar}
      />
      <span className={css.name}>Welcome, user</span>
      <Button
        color="secondary"
        variant="outlined"
        type="button"
      >
        Log out
      </Button>
    </div>
  )
};

export default UserNav;