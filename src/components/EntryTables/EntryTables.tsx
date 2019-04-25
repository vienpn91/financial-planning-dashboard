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
          type="Rates"
          textStyle="bold"
          defaultNumber={1000}
        /> and a tax-free component of
         <EntryTextBox
          type="Percent"
          textStyle="bold"
          defaultNumber={50}
        />
        <EntryPicker
          type="Date" placeholder="Start"/>

        <EntryTextBox
          type="Inline"
          textStyle="default"
          defaultText="taodagtext"
        />
        and a tax-free component of
        <EntryDropdown
          type="Inline"
          titleText="Click Me"
          subDropdown={dropdownData}
        />
         <EntryDropdown
          type="Default"
          titleText="Click Me"
          subDropdown={dropdownData}
        />
      </div>
    )
  }
}
export default EntryTables;
