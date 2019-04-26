import React, { PureComponent } from 'react';
import { DatePicker, Button } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { EntryPickerTable, DateButtonCustom } from './styled';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

interface EntryPickerProps {
  type: PickerType;
  placeholder?: string;
  border?: string;
  textType?: string;
  fontStyle?: string;
}

declare type PickerType = 'month' | 'range' | 'week' | 'date' | 'custom';

class EntryPicker extends PureComponent<EntryPickerProps, {}> {

  protected static defaultProps = {
    placeholder: '',
  };
  public state = {
    dateValue: null,
  };
  public handleOpenChange = () => {
    console.log('đa');
  }

  public render(): React.ReactNode {
    const { type, placeholder, fontStyle, textType, border } = this.props;
    switch (type) {
      case 'month':
        return(
          <EntryPickerTable
            className={'picker-' + type + ' has-' + border + ' font-' + fontStyle + ' text-' + textType}
          >
            <MonthPicker  placeholder={placeholder}/>
          </EntryPickerTable>
        );
      case 'range':
        return(
          <EntryPickerTable
            className={'picker-' + type + ' has-' + border + ' font-' + fontStyle + ' text-' + textType}
          >
            <RangePicker />
          </EntryPickerTable>
        );
      case 'week':
        return(
          <EntryPickerTable
            className={'picker-' + type + ' has-' + border + ' font-' + fontStyle + ' text-' + textType}
          >
            <WeekPicker  placeholder={placeholder} />
          </EntryPickerTable>
        );
      case 'date':
        return(
          <EntryPickerTable
            className={'picker-' + type + ' has-' + border + ' font-' + fontStyle + ' text-' + textType}
          >
            <DatePicker  placeholder={placeholder}/>
          </EntryPickerTable>
        );
      case 'custom':
        return(
          <EntryPickerTable
            className={'picker-' + type + ' has-' + border + ' font-' + fontStyle + ' text-' + textType}
          >
            <DatePicker
              value={moment('2015-01-01', 'YYYY-MM-DD')}
              renderExtraFooter={() =>
                <DateButtonCustom>
                  <Button
                    type="primary"
                    onClick={this.handleOpenChange}
                  >Retired</Button>
                </DateButtonCustom>
              }
              showToday={false}
            />
          </EntryPickerTable>
        );

      default:
        return(
          <EntryPickerTable
            className={'picker-' + type + ' has-' + border + ' font-' + fontStyle + ' text-' + textType}
          >
            <DatePicker  placeholder={placeholder}/>
          </EntryPickerTable>
        );
    }
  }

}

export default EntryPicker;