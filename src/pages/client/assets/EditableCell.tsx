// tslint:disable:no-any
import React from 'react';
import { get, find, isFunction } from 'lodash';
import { FormInput } from '../../../components/Elements/FormInput';
import { InputType } from '../../../components/Elements/FormInput/FormInput';
import { EditableCellWrap, EditableCellGroup, ValueEditCell } from './styled';
interface EditableProps {
  title: string;
  type: InputType;
  record: any;
  dataIndex: string;
  handleSave: (arg: object) => void;
  editable?: boolean;
  tableName?: string;
  rowIndex?: number;
  options?: Array<{ value: any; label: any }>;
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
    const { record, handleSave, rowIndex, tableName, dataIndex, ...props } = this.props;
    const fieldName = `${tableName}[${rowIndex}].${dataIndex}`;
    let value;

    switch (props.type) {
      case 'select': {
        value = e;
        break;
      }
      default: {
        value = get(e, 'currentTarget.value');
        break;
      }
    }

    if (fieldName) {
      handleSave({ tableName, rowIndex, dataIndex, value, record });
    }
    this.toggleEdit();
  }

  public render() {
    const { editing } = this.state;
    const {
      editable,
      dataIndex,
      title,
      record,
      handleSave,
      rowIndex,
      type,
      tableName,
      options,
      ...restProps
    } = this.props;
    let text;
    switch (this.props.type) {
      case 'select': {
        text = get(find(options, (opt) => opt.value === this.props.record[dataIndex]), 'label');
        break;
      }
      default: {
        text = restProps.children;
        break;
      }
    }
    const appendProps = { defaultOpen: false };

    if (this.props.type === 'select') {
      appendProps.defaultOpen = true;
    } else {
      delete appendProps.defaultOpen;
    }

    return (
      <td {...restProps}>
        {editable ? (
          editing ? (
            <EditableCellGroup>
              <FormInput
                type={type}
                name={`${tableName}[${rowIndex}].${dataIndex}`}
                ref={this.input}
                onPressEnter={this.save}
                options={options}
                handleBlur={this.save}
                {...appendProps}
              />
            </EditableCellGroup>
          ) : (
            <EditableCellWrap onClick={this.toggleEdit}>
              <ValueEditCell>
                {text}
              </ValueEditCell>
            </EditableCellWrap>
          )
        ) : (
          text
        )}
      </td>
    );
  }
}
