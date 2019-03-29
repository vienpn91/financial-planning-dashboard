import * as React from 'react';
import { FormInput } from '../Elements';
import { FormikProps } from 'formik';
import { LoginFormValues } from './LoginForm';
import { Button, Form } from 'antd';

const Page2: React.FC<{
  loading: boolean;
  error?: string;
  formProps: FormikProps<LoginFormValues>;
  onSubmit: () => void;
}> = ({ loading, error, formProps, onSubmit }) => {
  const nextPage = (event: React.KeyboardEvent) => {
    event.preventDefault();
    if (formProps.values.password && !formProps.errors.password) {
      onSubmit();
    }
  };

  return (
    <>
      <FormInput type="password" name="password" placeholder="Password" autoFocus={true} onPressEnter={nextPage} />
      <div className="has-error">
        <div className="ant-form-explain">{error}</div>
      </div>

      <Form.Item>
        <Button
          size={'large'}
          type="primary"
          className="login-form-button"
          onClick={onSubmit}
          loading={loading}
          disabled={Boolean(formProps.errors.password || !formProps.values.password)}
        >
          Next
        </Button>
      </Form.Item>
    </>
  );
};

export default Page2;
