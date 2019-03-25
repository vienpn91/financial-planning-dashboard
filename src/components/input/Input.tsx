import React from 'react';
import { InputWrapper, InputLogin, InputLabel } from './styled';

class Input extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <InputWrapper>
        <InputLogin />
        <InputLabel>Username</InputLabel>
      </InputWrapper>
    );
  }
}

export default Input;
