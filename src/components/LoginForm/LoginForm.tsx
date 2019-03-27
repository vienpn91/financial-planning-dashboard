import React from 'react';
import * as Yup from 'yup';
import { Row, Col, Form, Button } from 'antd';
import { LoginFormWrap } from './styled';
import Heading from '../Heading/Heading';
import { FormInput } from '../Elements';
import posed, { PoseGroup } from 'react-pose';
import { Formik, Form as Formk, FormikActions, FormikState } from 'formik';

const sleep = (timeout: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};
const EmailAnimation = posed.div({
  enter: { left: 0, position: 'relative' },
  exit: { left: -500, position: 'relative' },
});
const PasswordAnimation = posed.div({
  enter: { left: 0, position: 'relative' },
  exit: { left: 500, position: 'relative' },
});
interface LoginFormValues {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter an email')
    .required('Enter an email'),
  password: Yup.string().required('Enter a password'),
});

const LoginForm: React.FC = () => {
  const [step, setStep] = React.useState<number>(1);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  console.log('Current Step', step);
  const checkEmail = () => {
    setLoading(true);

    sleep(1000).then(() => {
      setStep((prevStep) => prevStep + 1);
      setLoading(false);
    });
  };

  return (
    <LoginFormWrap>
      <Row gutter={16}>
        <Col xs={{ span: 18, offset: 3 }} lg={{ span: 18, offset: 3 }}>
          <Heading titleText={'Sign In'} level={2} className="default" />
          <Formik
            onSubmit={(values: LoginFormValues, actions: FormikActions<LoginFormValues>) => {
              console.log({ values, actions });
              sleep(1000).then(() => {
                actions.setSubmitting(false);
                const error = true;
                if (error) {
                  actions.setErrors({ email: 'Invalid email' });
                } else {
                  // Actions after submit succeed
                }
              });
            }}
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            enableReinitialize
          >
            {(formState: FormikState<LoginFormValues>) => (
              <Formk className="login-form">
                  {step === 1 ? (
                    <PoseGroup>
                      <EmailAnimation key="1">
                        <FormInput type="text" name="email" placeholder={'Email'} />
                      </EmailAnimation>
                    </PoseGroup>
                  ) : (
                    <PoseGroup>
                      <PasswordAnimation key="2">
                        <FormInput type="password" name="password" placeholder={'Password'} />
                      </PasswordAnimation>
                    </PoseGroup>
                  )}
                <Form.Item>
                  {step === 1 ? (
                    <Button
                      size={'default'}
                      type="primary"
                      className="login-form-button"
                      onClick={checkEmail}
                      loading={isLoading}
                      disabled={!!formState.errors.email}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button size={'default'} type="primary" htmlType="submit" className="login-form-button">
                      Log In
                    </Button>
                  )}
                  {/* For testing transition form */}
                  <Button
                    size={'default'}
                    type="primary"
                    className="login-form-button"
                    onClick={() => setStep((prevStep) => prevStep - 1)}
                    disabled={step === 1}
                  >
                    Back
                  </Button>
                </Form.Item>
              </Formk>
            )}
          </Formik>
        </Col>
      </Row>
    </LoginFormWrap>
  );
};

export default LoginForm;
