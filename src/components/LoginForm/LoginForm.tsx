import React from 'react';
import * as Yup from 'yup';
import { Row, Col, Form, Button } from 'antd';
import { LoginFormWrap } from './styled';
import Input from '../Input/Input';
import Heading from '../Heading/Heading';
import { FormInput } from '../Elements';
import { Formik, Form as Formk, FormikActions } from 'formik';

interface LoginFormValues {
  email: string;
}

const CheckEmailSchema = Yup.object().shape({
  email: Yup.string().required('Enter an email'),
});

const LoginForm = () => {
  const [step, setStep] = React.useState(1);
  console.log('Current Step', step);

  return (
    <LoginFormWrap>
      <Row gutter={16}>
        <Col xs={{ span: 16, offset: 1 }} lg={{ span: 16, offset: 4 }}>
          <Heading titleText={'Sign In'} level={2} className="default" />
          <Formik
            onSubmit={(values: LoginFormValues, actions: FormikActions<LoginFormValues>) => {
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
            initialValues={{ email: '' }}
            validationSchema={CheckEmailSchema}
            enableReinitialize
          >
            <Formk className="login-form">
              <FormInput type="text" name="email" placeholder={'Email'} />
              {/* <FormInput type="password" name="password" placeholder={'Password'} /> */}
              <Form.Item>
                <Button
                  size={'large'}
                  type="primary"
                  className="login-form-button"
                  onClick={() => setStep((prevStep) => prevStep + 1)}
                >
                  Next
                </Button>
                <Button
                  size={'large'}
                  type="primary"
                  className="login-form-button"
                  onClick={() => setStep((prevStep) => prevStep - 1)}
                >
                  Back
                </Button>
                <Button size={'large'} type="primary" htmlType="submit" className="login-form-button">
                  Submit
                </Button>
              </Form.Item>
            </Formk>
          </Formik>
        </Col>
      </Row>
    </LoginFormWrap>
  );
};

export default LoginForm;
