import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { StyledForm, StyledLabel } from './RegisterForm.styled';
import { Button, Input } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLabel>
        Username
        <Input type="text" name="name" />
      </StyledLabel>
      <StyledLabel>
        Email
        <Input type="email" name="email" />
      </StyledLabel>
      <StyledLabel>
        Password
        <Input type="password" name="password" />
      </StyledLabel>
      <Button colorScheme='blue' type="submit">Register</Button>
    </StyledForm>
  );
};
