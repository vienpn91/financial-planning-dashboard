import React from 'react';
import { InputWrapper, InputLabel } from './styled';
import { InputNumber } from 'antd';
import { FormikHandlers } from 'formik';
import { get, isFunction } from 'lodash';

interface CustomInputNumberProps {
  name: string;
  value: any;
  setFieldValue?: (field: string, value: any) => void;
  // onChange: FormikHandlers['handleChange'];
  // onBlur: FormikHandlers['handleBlur'];
  placeholder?: string;
  autoFocus?: boolean;
  ref?: React.RefObject<any>;
}

class CustomInputNumber extends React.PureComponent<CustomInputNumberProps> {
  public readonly myRef = React.createRef<any>();

  public focusInput = () => {
    if (get(this.myRef, 'current.focus')) {
      debugger;
      this.myRef.current.focus();
    }
  }

  public handleChange = (value: any) => {
    const { setFieldValue, name } = this.props;

    debugger;
    if (setFieldValue) {
      setFieldValue(name, value);
    }

    // if (handleChange && isFunction(handleChange)) {
    //   handleChange(e, name, e.currentTarget.value);
    // }
  }

  // public handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   const { onKeyUp, value } = this.props;
  //   if (onKeyUp && isFunction(onKeyUp)) {
  //     onKeyUp(e, value);
  //   }
  // }

  // public handleBlur = (e: React.FocusEvent) => {
  //   const { onBlur, handleBlur } = this.props;
  //
  //   onBlur(e);
  //   if (handleBlur && isFunction(handleBlur)) {
  //     handleBlur(e);
  //   }
  // }

  public render(): JSX.Element {
    const { placeholder, setFieldValue, ...props } = this.props;

    return (
      <InputWrapper>
        <InputNumber
          {...props}
          ref={this.myRef}
          onChange={this.handleChange}
        />
        {placeholder && <InputLabel>{placeholder}</InputLabel>}
      </InputWrapper>
    );
  }
}

export default CustomInputNumber;
