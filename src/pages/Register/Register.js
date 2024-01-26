import { useDispatch } from "react-redux";
import css from "./Register.module.css";
import authOperations from "some/auth/auth-operations";
import { useState } from "react";
const { TextField, Button } = require("@mui/material");


const Register = () => {

  const dispatch = useDispatch();

  const [form, setForm] = useState({ name: '', email: '', password: '' });
  
  

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
    
  
  };

  const handleSubmit = e => {
    
    e.preventDefault();
    dispatch(authOperations.register({ ...form }));
    dispatch(authOperations.logIn({...form})) // auto log in
    setForm({ name: '', email: '', password: '' });
  };

  const { name, email, password } = form;

  return (
    <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
      <TextField
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        value={name}
          onChange={handleChange}
        className={css.textField}
        
      />

      <TextField
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        value={email}
          onChange={handleChange}
        className={css.textField}
        
      />

      <TextField
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        value={password}
          onChange={handleChange}
        className={css.textField}
        
      />

      
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Sign up
      </Button>
      </form>
     
  );
};

export default Register;
