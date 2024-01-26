import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "some/auth/auth-operations";
import { selectUserEmail} from "some/auth/auth-selectors";
import css from "./UserNav.module.css";




const UserNav = () => {

  const dispatch = useDispatch();

  const userEmail = useSelector(selectUserEmail);

  return (
    <div className={css.container}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
        alt="Default Avatar"
        width="32"
        className={css.avatar}
      />
      <span className={css.name}>{`Welcome, ${userEmail}`}</span>
    
  
      <Button
       color="primary"
        variant="contained"
        type="button"
        size="large"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
     </div>
  )
};

export default UserNav;