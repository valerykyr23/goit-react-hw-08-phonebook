import css from "./Register.module.css";
const { TextField, Button } = require("@mui/material");


const Register = () => {
  return (
    <form className={css.form} autoComplete="off">
      <TextField
        label="Name"
        variant="outlined"
        color="secondary"
        type="text"
        name="name"
        // value={name}
        className={css.textField}
        
      />

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
          Sign up
      </Button>
      </form>
     
  );
};

export default Register;
