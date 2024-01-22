import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from '@chakra-ui/react';
const { Box } = require('@chakra-ui/react');

const Register = () => {
  return (
    <Box>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="name" />
        <FormHelperText>Please fill out your name.</FormHelperText>

        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>Please enter your email.</FormHelperText>

        <FormLabel>Password</FormLabel>
        <Input type="password" />
        <FormHelperText>Create a strong password.</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default Register;
