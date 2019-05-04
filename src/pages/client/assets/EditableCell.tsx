// tslint:disable:no-any
import React from 'react';
import { get, isFunction } from 'lodash';
import { FormInput } from '../../../components/Elements/FormInput';

interface EditableProps {
  editable?: boolean;
  title: string;
  type?: string;
  record: any;
  handleSave: (arg: object) => void;
  tableName?: string;
  dataIndex?: string;
  rowIndex?: number;
}

export default class EditableCell extends React.Component<EditableProps> {
  public state = {
    editing: false,
  };

  public readonly input = React.createRef<any>();

  public toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing && get(this.input, 'current.focusInput') && isFunction(this.input.current.focusInput)) {
        this.input.current.focusInput();
      }
    });
  }

  public save = (e: any) => {
    const { record, handleSave, rowIndex, tableName, dataIndex } = this.props;
    const fieldName = `${tableName}[${rowIndex}].${dataIndex}`;
    const value = get(e, 'currentTarget.value');
    if (fieldName) {
      handleSave({ tableName, rowIndex, dataIndex, value, record });
    }
    this.toggleEdit();
  }

  public render() {
    const { editing } = this.state;
    // @ts-ignore
    const { editable, dataIndex, title, record, handleSave, rowIndex, type, tableName, ...restProps } = this.props;

    return (
      <td {...restProps}>
        {editable ? (
          editing ? (
            <FormInput
              useFastField
              type={'text'}
              name={`${tableName}[${rowIndex}].${dataIndex}`}
              ref={this.input}
              onPressEnter={this.save}
              handleBlur={this.save}
            />
          ) : (
            <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={this.toggleEdit}>
              {restProps.children}
            </div>
          )
        ) : (
          restProps.children
        )}
      </td>
    );
  }
}
