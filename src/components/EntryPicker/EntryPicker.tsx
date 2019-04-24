import React, { PureComponent } from 'react';
import { DatePicker } from 'antd';
import { EntryPickerTable } from './styled';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

interface EntryPickerProps {
  type: PickerType;
  placeholder?: string;
}

declare type PickerType = 'Month' | 'Range' | 'Week' | 'Date';

class EntryPicker extends PureComponent<EntryPickerProps, {}> {
  protected static defaultProps = {
    placeholder: '',
  };

  public render(): React.ReactNode {
    const { type, placeholder } = this.props;
    switch (type) {
      case 'Month':
        return(
          <EntryPickerTable className={type}>
            <MonthPicker  placeholder={placeholder}/>
          </EntryPickerTable>
        );
      case 'Range':
        return(
          <EntryPickerTable className={type}>
            <RangePicker />
          </EntryPickerTable>
        );
      case 'Week':
        return(
          <EntryPickerTable className={type}>
            <WeekPicker  placeholder={placeholder} />
          </EntryPickerTable>
        );
      case 'Date':
        return(
          <EntryPickerTable className={type}>
            <DatePicker  placeholder={placeholder}/>
          </EntryPickerTable>
        );
      default:
        return(
          <EntryPickerTable className={type}>
            <DatePicker  placeholder={placeholder}/>
          </EntryPickerTable>
        );
    }
  }

}

export default EntryPicker;
