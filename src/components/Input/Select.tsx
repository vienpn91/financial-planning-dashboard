import React from 'react';
import { InputWrapper, InputLogin, InputLabel } from './styled';
import { FormikHandlers } from 'formik';
import { get, isFunction } from 'lodash';
import { Select } from 'antd';

interface InputProps {
  name: string;
  value: any;
  // onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
  placeholder?: string;
  prefix?: React.ReactNode;
  autoFocus?: boolean;
  ref?: React.RefObject<any>;
  handleChange?: (e: any, name?: string, value?: any) => void;
  handleBlur?: (e: React.FocusEvent | string) => void;
  options?: Array<{label: string, value: any}>;
  setFieldValue?: (field: string, value: any) => void;
}

class Input extends React.PureComponent<InputProps> {
  public readonly myRef = React.createRef<any>();

  public focusInput = () => {
    if (get(this.myRef, 'current.focus')) {
      this.myRef.current.focus();
    }
  }

  public handleChange = (newValue: any) => {
    const { setFieldValue, name } = this.props;

    if (setFieldValue) {
      setFieldValue(name, newValue);
    }
  }

  public handleBlur = (e: React.FocusEvent | string) => {
    const { onBlur, handleBlur } = this.props;

    onBlur(e);
    if (handleBlur && isFunction(handleBlur)) {
      handleBlur(e);
    }
  }

  public render(): JSX.Element {
    const { placeholder, options, ...props } = this.props;

    return (
      <InputWrapper>
        <Select {...props} onChange={this.handleChange} ref={this.myRef} onBlur={this.handleBlur}>
          {options &&
            options.length > 0 &&
            options.map((option) => (
              <Select.Option value={option.value} key={option.value}>
                {option.label}
              </Select.Option>
            ))}
        </Select>
        {placeholder && <InputLabel>{placeholder}</InputLabel>}
      </InputWrapper>
    );
  }
}

export default Input;
