const {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} = require('@chakra-ui/react');

const Login = () => {
  return (
    <Box margin="20px" backgroundColor="gray" w="500px">
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
        <FormHelperText>We'll never disclouse your password.</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default Login;
