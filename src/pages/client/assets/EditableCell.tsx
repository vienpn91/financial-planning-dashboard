import React from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;
const EditableContext = React.createContext(undefined);
const EditableRow = ({ form, index, ...props }: { form: any; index: number}) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);
export const EditableFormRow = Form.create()(EditableRow);

interface EditableProps {
  record: any;
  handleSave: (arg: object) => void;
}

export default class EditableCell extends React.Component<EditableProps> {
  public state = {
    editing: false,
  };

  public toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        // @ts-ignore
        this.input.focus();
      }
    });
  }

  public save = (e: any) => {
    const { record, handleSave } = this.props;
    // @ts-ignore
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  }

  public render() {
    const { editing } = this.state;
    // @ts-ignore
    const { editable, dataIndex, title, record, index, handleSave, ...restProps } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>
            {(form) => {
              // @ts-ignore
              this.form = form;
              return editing ? (
                <FormItem style={{ margin: 0 }}>
                  {form && form.getFieldDecorator(dataIndex, {
                    rules: [
                      {
                        required: true,
                        message: `${title} is required.`,
                      },
                    ],
                    initialValue: record[dataIndex],
                    // @ts-ignore
                  })(<Input ref={(node) => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
                </FormItem>
              ) : (
                <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={this.toggleEdit}>
                  {restProps.children}
                </div>
              );
            }}
          </EditableContext.Consumer>
        ) : (
          restProps.children
        )}
      </td>
    );
  }
}
