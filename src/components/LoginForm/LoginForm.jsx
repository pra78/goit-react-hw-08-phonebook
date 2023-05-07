import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { StyledForm, StyledLabel } from './LoginForm.styled';
import { Button, Input } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLabel>
        Email
        <Input type="email" name="email" />
      </StyledLabel>
      <StyledLabel>
        Password
        <Input type="password" name="password" />
      </StyledLabel>
      <Button colorScheme='blue' type="submit">Log In</Button>
    </StyledForm>
  );
};
