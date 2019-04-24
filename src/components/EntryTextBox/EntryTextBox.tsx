import React, { PureComponent } from 'react';
import { InputNumber, Input } from 'antd';
import { EntryInputNumberWrapper, EntryInputWrapper } from './styled';


interface EntryPickerProps {
  type: PickerType;
  defaultValue?: number;
  textStyle: string;
}

declare type PickerType = 'Rates' | 'Percent' | 'Default';

class EntryTextBox extends PureComponent<EntryPickerProps, {}> {
  protected static defaultProps = {
    placeholder: '',
  };

  public render(): React.ReactNode {
    const { type, defaultValue, textStyle } = this.props;
    switch (type) {
      case 'Rates':
        return(
          <EntryInputNumberWrapper className={textStyle}>
             <InputNumber
                defaultValue={defaultValue}
                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              />
          </EntryInputNumberWrapper>
        );
      case 'Percent':
        return(
          <EntryInputNumberWrapper className={textStyle}>
            <InputNumber
              defaultValue={defaultValue}
              formatter={value => `${value}%`}
            />
          </EntryInputNumberWrapper>
        );
      case 'Default':
        return(
          <EntryInputWrapper className={textStyle}>
            <Input />
          </EntryInputWrapper>
        );
      default:
        return(
          <EntryInputWrapper className={textStyle}>
            <Input />
          </EntryInputWrapper>
        );
    }
  }

}

export default EntryTextBox;
