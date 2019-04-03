import * as React from 'react';
import { FormInput } from '../Elements';
import { FormikProps } from 'formik';
import { LoginFormValues } from './LoginForm';
import { Button, Form } from 'antd';
import LoginVerify from '../LoginVerify/LoginVerify';

const Page3: React.FC<{
  loading: boolean;
  message?: string;
  formProps: FormikProps<LoginFormValues>;
  onSubmit: () => void;
  error?: string;
}> = ({ loading = false, formProps, error, onSubmit, message = '' }) => (
  <LoginVerify loading={loading} error={error} formProps={formProps} message={message} onSubmit={onSubmit} />
);

export default Page3;
