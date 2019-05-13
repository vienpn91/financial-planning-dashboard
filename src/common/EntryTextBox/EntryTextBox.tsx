import React, { PureComponent } from 'react';
import { InputNumber, Input } from 'antd';
import { EntryInputNumberWrapper, EntryInputWrapper, EntryInputDefault } from './styled';

interface EntryTextBoxProps {
  type: TextType;
  defaultNumber?: number;
  defaultText?: string;
  textStyle: string;
}

declare type TextType = 'rates' | 'percent' | 'default' | 'inline';

class EntryTextBox extends PureComponent<EntryTextBoxProps, {}> {
  protected static defaultProps = {
    placeholder: '',
  };

  public render(): React.ReactNode {
    const { type, defaultNumber, textStyle, defaultText } = this.props;
    switch (type) {
      case 'rates':
        return (
          <EntryInputNumberWrapper className={textStyle}>
            <InputNumber
              defaultValue={defaultNumber}
              formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            />
          </EntryInputNumberWrapper>
        );
      case 'percent':
        return (
          <EntryInputNumberWrapper className={textStyle}>
            <InputNumber defaultValue={defaultNumber} formatter={(value) => `${value}%`} />
          </EntryInputNumberWrapper>
        );
      case 'inline':
        return (
          <EntryInputWrapper className={textStyle}>
            <Input defaultValue={defaultText} />
          </EntryInputWrapper>
        );
      case 'default':
        return (
          <EntryInputDefault className={textStyle}>
            <Input defaultValue={defaultText} />
          </EntryInputDefault>
        );
      default:
        return (
          <EntryInputWrapper className={textStyle}>
            <Input />
          </EntryInputWrapper>
        );
    }
  }
}

export default EntryTextBox;
