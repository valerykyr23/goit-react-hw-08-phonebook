
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'some/auth/auth-operations';
import { getIsLoggedIn, selectIsLoggedIn, selectUserName } from 'some/auth/auth-selectors';
import css from "./Login.module.css";


const Login = () => {

  const dispatch = useDispatch();
  const Uname = useSelector(selectUserName);

  const logar = useSelector(getIsLoggedIn);

  const [form, setForm] = useState({ email: '', password: '' });
  
  

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
    
  
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ ...form }));
    setForm({ email: '', password: '' });

    console.log(logar);
  };

  const { email, password } = form;


  return (
    
    <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
      <TextField
        label="Email"
        variant="outlined"
        color="secondary"
        type="email"
        name="email"
        value={email}
        className={css.textField}
        onChange={handleChange}
      />

      <TextField
        label="Password"
        variant="outlined"
        color="secondary"
        type="password"
        name="password"
        value={password}
        className={css.textField}
        onChange={handleChange}
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