import React from 'react';
import { LoginMain } from './styled';
import LoginForm from '../../components/LoginForm/LoginForm';

class LoginPage extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <LoginMain>
        <LoginForm />
      </LoginMain>
    );
  }
}

export default LoginPage;
