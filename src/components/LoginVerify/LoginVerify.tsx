import React from 'react';
import { Row, Col, Form, Button, Icon } from 'antd';
import { LoginVerifyWrap, SubHeading, ResendCode } from './styled';
import Heading from '../Heading/Heading';
import { FormInput } from '../Elements';
import { Formik, Form as Formk, FormikActions } from 'formik';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginVerify = () => {
  return (
    <LoginVerifyWrap>
      <Row gutter={16}>
        <Col xs={{ span: 16, offset: 1 }} lg={{ span: 20, offset: 2 }}>
          <Heading titleText={'Just one more step'} level={2} className="default" />
          <SubHeading>Enter the code sent to +61XXXX4286</SubHeading>
          <Formik
            onSubmit={(values: LoginFormValues, actions: FormikActions<LoginFormValues>) => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
            initialValues={{ email: '', password: '' }}
            enableReinitialize
          >
            <Formk className="verify-form">
              <FormInput type="text" name="number-1" placeholder={''} />
              <FormInput type="text" name="number-2" placeholder={''} />
              <FormInput type="text" name="number-3" placeholder={''} />
              <FormInput type="text" name="number-4" placeholder={''} />
              <ResendCode>
                <Icon type="exclamation-circle" theme="filled" />
                <span>Didn’t receive the code? </span>
                <a href="#">Resend</a>
              </ResendCode>
              <Form.Item>
                <Button
                  size={'large'}
                  type="primary"
                  className="login-form-button"
                >
                  Submit
                </Button>
                <Button
                  size={'large'}
                  type="default"
                  className="login-form-button"
                >
                  Cancel
                </Button>
              </Form.Item>
            </Formk>
          </Formik>
        </Col>
      </Row>
    </LoginVerifyWrap>
  );
};

export default LoginVerify;
