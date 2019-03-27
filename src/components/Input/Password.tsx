import React from 'react';
import { PasswordWrapper, PasswordLogin, InputLabel } from './styled';

export interface InputProps {
  placeholder?: string;
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
