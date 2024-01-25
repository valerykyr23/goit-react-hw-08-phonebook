import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import authOperations from "some/auth/auth-operations";
import css from "./UserNav.module.css";




const UserNav = () => {

  const dispatch = useDispatch();

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
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
     </div>
  )
};

export default UserNav;