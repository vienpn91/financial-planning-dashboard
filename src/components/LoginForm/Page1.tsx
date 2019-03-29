import * as React from 'react';
import { FormInput } from '../Elements';
import { FormikProps } from 'formik';
import { LoginFormValues } from './LoginForm';
import { Form } from 'antd';
import { ButtonSignIn } from './styled';

const Page1: React.FC<{
  loading: boolean;
  error?: string;
  formProps: FormikProps<LoginFormValues>;
  onSubmit: () => void;
}> = ({ loading, error, formProps, onSubmit }) => {
  const nextPage = (event: React.KeyboardEvent) => {
    event.preventDefault();
    if (formProps.values.email && !formProps.errors.email) {
      onSubmit();
    }
  };

  return (
    <>
      <FormInput type="text" name="email" placeholder="Email" autoFocus={true} onPressEnter={nextPage} />
        <div className="has-error">
          <div className="ant-form-explain">{error}</div>
        </div>

      <Form.Item>
        <ButtonSignIn
          size={'large'}
          type="primary"
          className="login-form-button"
          onClick={onSubmit}
          loading={loading}
          disabled={Boolean(formProps.errors.email || !formProps.values.email)}
        >
          Next
        </ButtonSignIn>
      </Form.Item>
    </>
  );
};

export default Page1;
