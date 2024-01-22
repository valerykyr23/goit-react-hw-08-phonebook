
import { Button, TextField } from '@mui/material';
import css from "./Login.module.css";


const Login = () => {
  return (
    
    <form className={css.form} autoComplete="off">
      <TextField
        label="Email"
        variant="outlined"
        color="secondary"
        type="email"
        name="email"
        // value={email}
        className={css.textField}
        
      />

      <TextField
        label="Password"
        variant="outlined"
        color="secondary"
        type="password"
        name="password"
        // value={password}
        className={css.textField}
        
      />

   
        <Button
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
        >
          Log in
        </Button>
     
    </form>
  );
};

export default Login;
