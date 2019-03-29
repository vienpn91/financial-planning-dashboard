import * as React from 'react';
import { FormInput } from '../Elements';
import { FormikProps } from 'formik';
import { LoginFormValues } from './LoginForm';
import { Button, Form } from 'antd';
import LoginVerify from '../LoginVerify/LoginVerify';

const Page3: React.FC<{
  loading: boolean;
  phone?: string;
  formProps: FormikProps<LoginFormValues>;
  onSubmit: () => void;
  error?: string;
}> = ({ loading, formProps, error, onSubmit, phone = '+61XXXX4286' }) => (
  <LoginVerify loading={loading} error={error} formProps={formProps} phone={phone} onSubmit={onSubmit} />
);

export default Page3;
