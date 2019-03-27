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
        <PasswordLogin {...props} />
        <InputLabel className="title">{placeholder}</InputLabel>
      </PasswordWrapper>
    );
  }
}

export default Password;
