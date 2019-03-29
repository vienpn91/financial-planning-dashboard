import React from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { RootState, StandardAction } from '../../reducers/reducerTypes';
import { Row, Col } from 'antd';
import { LoginFormWrap, SubHeading } from './styled';
import Heading from '../Heading/Heading';
import posed, { PoseGroup } from 'react-pose';
import { Formik, Form as Formk, FormikActions, FormikProps } from 'formik';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { bindActionCreators, Dispatch } from 'redux';
import { AuthActions, CheckEmailAction, CheckEmailPayload } from '../../reducers/auth';

const delay = (timeout: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
};
const EmailAnimation = posed.div({
  enter: {
    x: 0,
    transition: { duration: 300 },
  },
  exit: {
    x: -500,
  },
});
const PasswordAnimation = posed.div({
  enter: {
    x: 0,
    transition: { duration: 300 },
  },
  exit: {
    x: ({ isMoveToRight }: { isMoveToRight: boolean }) => {
      return isMoveToRight ? 500 : -500;
    },
  },
});
const VerifyCodeAnimation = posed.div({
  enter: {
    x: 0,
    transition: { duration: 300 },
  },
  exit: {
    x: 500,
  },
});

export interface LoginFormValues {
  email: string;
  password: string;
  code: string[] | undefined;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter an email')
    .required('Enter an email'),
  password: Yup.string().required('Enter a password'),
  code: Yup.array().of(Yup.string().required('Enter an OTP')),
});

interface LoginState {
  page: number;
  isLoading: boolean;
  isMoveToRight: boolean;
}

interface LoginProp {
  checkEmailAction: (payload: CheckEmailPayload) => CheckEmailAction;
  loading?: boolean;
  error?: string;
}

class LoginForm extends React.PureComponent<LoginProp, LoginState> {
  public readonly state = {
    page: 0,
    isLoading: false,
    isMoveToRight: true,
  };

  public render(): React.ReactNode {
    const { loading = false, error } = this.props;
    const { page, isMoveToRight, isLoading } = this.state;
    // console.log('isMoveToRight', isMoveToRight);

    return (
      <LoginFormWrap>
        <Row gutter={16}>
          <Col xs={{ span: 18, offset: 3 }} lg={{ span: 18, offset: 3 }}>
            {page === 0 && (
              <Heading titleText={'Sign In'} level={2} className="default" />
            )}
            {page === 1 && (
              <Heading titleText={'Sign In'} level={2} className="default" />
            )}
            {page === 2 && (
              <div>
                <Heading titleText={'Just one more step'} level={2} className="subHeading" />
                <SubHeading>Enter the code sent to {'+61XXXX4286'}</SubHeading>
              </div>
            )}
            <Formik
              onSubmit={(values: LoginFormValues, actions: FormikActions<LoginFormValues>) => {
                this.setLoading(true);
                console.log('Verify code', values);

                delay(500).then(() => {
                  actions.setSubmitting(false);
                  this.setLoading(false);
                });
              }}
              initialValues={{ email: '', password: '', code: [] }}
              validationSchema={LoginSchema}
              enableReinitialize
              render={(formProps: FormikProps<LoginFormValues>) => (
                <Formk className="login-form">
                  <PoseGroup isMoveToRight={isMoveToRight}>
                    {page === 0 && (
                      <EmailAnimation key="1">
                        <Page1
                          loading={isLoading}
                          formProps={formProps}
                          onSubmit={() => this.checkEmail(formProps.values.email)}
                          error={error}
                        />
                      </EmailAnimation>
                    )}
                    {page === 1 && (
                      <PasswordAnimation key="2">
                        <Page2
                          loading={isLoading}
                          formProps={formProps}
                          onSubmit={() =>
                            this.login({
                              email: formProps.values.email,
                              password: formProps.values.password,
                            })
                          }
                          error={error}
                        />
                      </PasswordAnimation>
                    )}
                    {page === 2 && (
                      <VerifyCodeAnimation key="3">
                        <Page3
                          loading={isLoading}
                          formProps={formProps}
                          onSubmit={formProps.submitForm}
                          error={error}
                        />
                      </VerifyCodeAnimation>
                    )}
                  </PoseGroup>

                  {/* <Form.Item>
                    <Button
                      size={'default'}
                      type="primary"
                      className="login-form-button"
                      onClick={this.backPage}
                      disabled={page === 0}
                    >
                      Back
                    </Button>
                  </Form.Item> */}
                </Formk>
              )}
            />
          </Col>
        </Row>
      </LoginFormWrap>
    );
  }

  public componentWillUpdate(nextProps: any, nextState: LoginState) {
    const { page: nextPage } = nextState;
    const { page } = this.state;
    console.log('page', page);
    console.log('nextPage', nextPage);

    if (page === 0 && nextPage === 1) {
      this.setMoveToRight(true);
    }
    if (page === 1 && nextPage === 2) {
      this.setMoveToRight(false);
    }
    if (page === 2 && nextPage === 1) {
      this.setMoveToRight(false);
    }
    if (page === 1 && nextPage === 0) {
      this.setMoveToRight(true);
    }
  }

  private setMoveToRight = (isMoveToRight: boolean) => {
    this.setState({ isMoveToRight });
  }

  private nextPage = () => {
    this.setState((prevState) => {
      const { page } = prevState;
      return {
        page: page + 1,
      };
    });
  }

  private backPage = () => {
    this.setState((prevState) => {
      const { page } = prevState;
      return {
        page: page - 1 < 0 ? 0 : page - 1,
      };
    });
  }

  private setLoading = (isLoading: boolean) => {
    this.setState({ isLoading });
  }

  private checkEmail = (email: string) => {
    // const { checkEmailAction } = this.props;
    // console.log('Check email', email);

    // checkEmailAction({ email });
    this.setLoading(true);
    delay(500).then(() => {
      this.setLoading(false);
      this.nextPage();
    });
  }

  private login = ({ email, password }: { email: string; password: string }) => {
    console.log('Login', { email, password });
    this.setLoading(true);
    delay(500).then(() => {
      this.setLoading(false);
      this.nextPage();
    });
  }
}

const mapStateToProps = (state: RootState) => ({
  loading: state.auth.loading,
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch: Dispatch<StandardAction<any>>) =>
  bindActionCreators(
    {
      checkEmailAction: AuthActions.checkEmail,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
