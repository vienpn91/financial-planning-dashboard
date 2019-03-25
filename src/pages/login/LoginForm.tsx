import React from 'react';
import { Row, Col, Form, Button } from 'antd';
import { LoginFormWrap, TitleLogin } from './styled';
import Input from '../../components/input/Input';

class LoginForm extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <LoginFormWrap>
        <Row gutter={16}>
          <Col xs={{ span: 16, offset: 1 }} lg={{ span: 16, offset: 4}}>
            <TitleLogin>Sign In</TitleLogin>
            <Form className="login-form">
              <Form.Item>
                <Input />
              </Form.Item>
              <Form.Item>
                <Button size={'large'} type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </LoginFormWrap>
    );
  }
}

export default LoginForm;
