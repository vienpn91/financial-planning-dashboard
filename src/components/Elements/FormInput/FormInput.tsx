import React, { PureComponent } from 'react';
import { Field, FieldProps } from 'formik';
import { Form, InputNumber, Checkbox, Icon, Select } from 'antd';
// const { TextArea } = Input;
import Input from '../../Input/Input';

interface InputProps {
  type: InputType;
  name: string;
  placeholder?: string;
  prefix?: React.ReactNode;
  // Input Number
  min?: number;
  max?: number;
  // Select
  options?: Array<{ value: string | number; label: string }>;
  showSearch?: boolean;
}

declare type InputType = 'text' | 'password' | 'number' | 'checkbox' | 'select' | 'date' | 'textarea';

type CustomProps = FieldProps<any> & InputProps;

class FormInput extends PureComponent<InputProps, {}> {
  protected static defaultProps = {
    placeholder: '',
  };

  public render(): React.ReactNode {
    return <Field {...this.props} component={this.renderFormInput} />;
  }

  private renderInputText = (props: CustomProps): React.ReactNode => {
    const { field, form, ...restProps } = props;
    const { touched, errors } = form;
    const errorMsg = touched[field.name] && errors[field.name];

    return (
      <Form.Item validateStatus={errorMsg ? 'error' : ''} help={errorMsg || ''}>
        <Input {...field} {...restProps} />
      </Form.Item>
    );
  }

  private renderInputNumber = (props: CustomProps): React.ReactNode => {
    const { field, form, prefix, type, ...restProps } = props;
    const { touched, errors, setFieldValue } = form;
    const errorMsg = touched[field.name] && errors[field.name];

    return (
      <Form.Item validateStatus={errorMsg ? 'error' : ''} help={errorMsg || ''}>
        <InputNumber {...field} {...restProps} onChange={(value) => setFieldValue(field.name, value)} />
      </Form.Item>
    );
  }

  private renderSelect = (props: CustomProps): React.ReactNode => {
    const {
      field: { onChange, onBlur, ...field },
      form: { touched, errors, setFieldValue },
      options,
      type,
      ...restProps
    } = props;
    const errorMsg = touched[field.name] && errors[field.name];

    return (
      <Form.Item validateStatus={errorMsg ? 'error' : ''} help={errorMsg || ''}>
        <Select {...field} {...restProps} onChange={(newValue: any) => setFieldValue(field.name, newValue)}>
          {options &&
            options.length > 0 &&
            options.map((option) => (
              <Select.Option value={option.value} key={option.value}>
                {option.label}
              </Select.Option>
            ))}
        </Select>
      </Form.Item>
    );
  }

  private renderCheckbox = (props: CustomProps): React.ReactNode => {
    const { field, form, ...restProps } = props;
    const { touched, errors } = form;
    const errorMsg = touched[field.name] && errors[field.name];

    return (
      <Form.Item validateStatus={errorMsg ? 'error' : ''} help={errorMsg || ''}>
        <Checkbox {...field} {...restProps}>
          {restProps.placeholder}
        </Checkbox>
      </Form.Item>
    );
  }

  private renderFormInput = (props: CustomProps): React.ReactNode => {
    const { type } = props;
    switch (type) {
      case 'text':
      case 'password':
      case 'textarea':
        return this.renderInputText(props);
      case 'number':
        return this.renderInputNumber(props);
      case 'select':
        return this.renderSelect(props);
      case 'checkbox':
        return this.renderCheckbox(props);
      case 'date':
        return null;
      default:
        return this.renderInputText(props);
    }
  }
}

export default FormInput;
