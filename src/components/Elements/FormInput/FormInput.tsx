import React, { PureComponent } from 'react';
import { Field, FieldProps } from 'formik';
import { Input } from 'antd';

type InputProps = {
  type: string;
  title?: string;
  name: string;
} & typeof defaultProps;
const defaultProps = {
  title: '',
};

enum InputTypes {
  text = 'text',
  password = 'password',
}

type CustomProps = InputProps & FieldProps<any>;

class FormInput extends PureComponent<InputProps, {}> {
  public render(): React.ReactNode {
    return <Field {...this.props} component={this.renderFormInput} />;
  }

  public renderTextInput = (props: CustomProps): React.ReactNode => {
    const { field, form, ...restProps } = props;
    const { touched, errors } = form;
    const { type, title } = restProps;

    return (
      <label htmlFor={field.name}>
        <div>{title}</div>
        <input type={type} {...field} />
        {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
      </label>
    );
  }

  public renderFormInput = (props: CustomProps): React.ReactNode => {
    const { type } = props;
    switch (type) {
      case InputTypes.text:
        return this.renderTextInput(props);
      default:
        return this.renderTextInput(props);
    }
  }
}

export default FormInput;
