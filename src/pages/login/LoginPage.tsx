import React from 'react';
import { Row, Col, Typography } from 'antd';
import { LoginMain } from './styled';

const { Title } = Typography;
class LoginPage extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <LoginMain>
        {/* <Row gutter={16}>
          <Col xs={{ span: 16, offset: 1 }} lg={{ span: 10, offset: 7}}>
            <Title level={2}>Sign In</Title>
          </Col>
        </Row> */}
      </LoginMain>
    );
  }
}

export default LoginPage;
