import React from 'react';
import EntryDropdown from '../EntryDropdown/EntryDropdown';
import EntryTextBox from '../EntryTextBox/EntryTextBox';
import EntryPicker from '../EntryPicker/EntryPicker';
class EntryTables extends React.PureComponent {

  public render(): JSX.Element {
    const dropdownData = [{
      key: 1,
      link : 'http://localhost:3000/example-1',
      value: 'Example 1',
    },
    {
      key: 2,
      link : 'http://localhost:3000/example-2',
      value: 'Example 2',
    }];
    return(
      <div>
        This super has a taxable component of
        <EntryTextBox
          type="rates"
          textStyle="bold"
          defaultNumber={1000}
        /> and a tax-free component of
         <EntryTextBox
          type="percent"
          textStyle="bold"
          defaultNumber={50}
        />
         <EntryTextBox
          type="inline"
          textStyle="default"
          defaultText="Textbox no border"
        />
         <EntryTextBox
          type="default"
          textStyle="default"
          defaultText="Textbox width border"
        />    
        and a tax-free component of
        <EntryDropdown
          type="inline"
          titleText="Click Me"
          textSize="small"
          fontWeight="bold"
          subDropdown={dropdownData}
        />
        <EntryDropdown
          type="inline"
          titleText="Click Me"
          textSize="default"
          subDropdown={dropdownData}
        />
         <EntryDropdown
          type="default"
          titleText="default Click Me"
          subDropdown={dropdownData}
        />
        <EntryPicker
          type="date"
          placeholder="Start"
          border="none"
        />
         <EntryPicker
          type="date"
          placeholder="Start"
          border="none"
          textType="small"
          fontStyle="bold"
        />
        <EntryPicker
          type="date"
          textType="small"
          fontStyle="bold"
        />
         <EntryPicker
          type="week"
          placeholder="Week"
        />


      </div>
    )
  }
}
export default EntryTables;
