import React from 'react';
import { InputWrapper, InputLogin, InputLabel } from './styled';

export interface InputProps {
  placeholder?: string;
}
class Input extends React.PureComponent<InputProps> {
  public render(): JSX.Element {
    const { placeholder } = this.props;
    return (
      <InputWrapper>
        <InputLogin />
        <InputLabel>{placeholder}</InputLabel>
      </InputWrapper>
    );
  }
}

export default Input;
