import React from 'react';
import { Row, Col, Typography } from 'antd';
import { LoginMain } from './styled';
import LoginForm from './LoginForm';

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
