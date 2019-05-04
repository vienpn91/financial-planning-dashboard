import React from 'react';
import { InputWrapper, InputLogin, InputLabel } from './styled';
import { FormikHandlers } from 'formik';
import { get, isFunction } from 'lodash';

interface InputProps {
  name: string;
  value: any;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
  placeholder?: string;
  prefix?: React.ReactNode;
  autoFocus?: boolean;
  useNumberOnly?: boolean;
  ref?: React.RefObject<any>;
  handleChange?: (e: any, name?: string, value?: any) => void;
  handleBlur?: (e: React.FocusEvent) => void;
  onPressEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>, value: any) => void;
}

class Input extends React.PureComponent<InputProps> {
  public readonly myRef = React.createRef<any>();

  public focusInput = () => {
    if (get(this.myRef, 'current.focus')) {
      this.myRef.current.focus();
    }
  }

  public handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const { useNumberOnly, onChange, handleChange, name } = this.props;
    if (useNumberOnly) {
      const mustANumber = !isNaN(Number(e.currentTarget.value));
      if (mustANumber) {
        onChange(e);
      }
    } else {
      onChange(e);
    }
    if (handleChange && isFunction(handleChange)) {
      handleChange(e, name, e.currentTarget.value);
    }
  }

  public handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { onKeyUp, value } = this.props;
    if (onKeyUp && isFunction(onKeyUp)) {
      onKeyUp(e, value);
    }
  }

  public handleBlur = (e: React.FocusEvent) => {
    const { onBlur, handleBlur } = this.props;

    onBlur(e);
    if (handleBlur && isFunction(handleBlur)) {
      handleBlur(e);
    }
  }

  public render(): JSX.Element {
    const { placeholder, onChange, onKeyUp, useNumberOnly, handleBlur, ...props } = this.props;

    return (
      <InputWrapper>
        <InputLogin
          {...props}
          ref={this.myRef}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          onBlur={this.handleBlur}
        />
        {placeholder && <InputLabel>{placeholder}</InputLabel>}
      </InputWrapper>
    );
  }
}

export default Input;
