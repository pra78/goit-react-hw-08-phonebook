import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { UserMenuStyled, WelcomeMessageStyled } from './UserMenu.styled';
import { Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuStyled>
      <WelcomeMessageStyled>Welcome, {user.name}</WelcomeMessageStyled>
      <Button colorScheme='blue' type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserMenuStyled>
  );
};
