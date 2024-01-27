import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'some/auth/auth-operations';
import { selectUserEmail } from 'some/auth/auth-selectors';
import css from './UserNav.module.css';
import { FaUserCircle } from 'react-icons/fa';

const UserNav = () => {
  const dispatch = useDispatch();

  const userEmail = useSelector(selectUserEmail);

  return (
    <div className={css.container}>
      <FaUserCircle />
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
  );
};

export default UserNav;
