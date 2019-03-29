import React from 'react';
import { PasswordWrapper, PasswordLogin, InputLabel } from './styled';
import { FormikHandlers } from 'formik';

export interface InputProps {
  placeholder?: string;
  autoFocus?: boolean;
  name: string;
  value: any;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
}

class Password extends React.PureComponent<InputProps> {
  public render(): JSX.Element {
    const { placeholder, ...props } = this.props;

    return (
      <PasswordWrapper>
        <InputLabel className="title">{placeholder}</InputLabel>
        <PasswordLogin {...props} />
      </PasswordWrapper>
    );
  }
}

export default Password;
