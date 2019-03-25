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

class FormInput extends PureComponent<InputProps, {}> {
  public render(): React.ReactNode {
    return <Field {...this.props} component={this.renderFormInput} />;
  }

  private renderTextInput({ field, form }: FieldProps<any>, ...props: InputProps) {
    const { touched, errors } = form;
    const { type, title } = props;

    return (
      <label htmlFor={field.name}>
        <div>{title}</div>
        <input type="text" {...field} />
        {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
      </label>
    );
  }

  private renderFormInput(props: InputProps) {
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
