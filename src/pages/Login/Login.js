
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'some/auth/auth-operations';
import css from "./Login.module.css";


const Login = () => {

  const dispatch = useDispatch();
  

  

  const [form, setForm] = useState({ email: '', password: '' });
  
  

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
    
  
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ ...form }));
    setForm({ email: '', password: '' });

    
  };

  const { email, password } = form;


  return (
    
    <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        value={email}
        className={css.textField}
        onChange={handleChange}
      />

      <TextField
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        value={password}
        className={css.textField}
        onChange={handleChange}
      />

   
        <Button
          variant="contained"
          color="success"
          size="large"
          type="submit"
        >
          Log in
        </Button>
     
    </form>
  );
};

export default Login;
