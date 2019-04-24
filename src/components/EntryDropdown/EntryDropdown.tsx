import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { EntryDropdownWrapper } from './styled';
export interface EntryDropdownProps {
  titleText?: string;
  subDropdown?: Array<{ key: number; link: string ; value: string; }>;
}
/* Example follow
*   const dropdownData = [{
*     key: 1,
*     link : 'http://localhost:3000/example-1',
*     value: 'Example 1',
*   },
*   {
*     key: 2,
*     link : 'http://localhost:3000/example-2',
*     value: 'Example 2',
*   }];
*   <EntryDropdown
*     titleText="Click Me"
*     subDropdown={dropdownData}
*   />
*/
class EntryDropdown extends React.PureComponent<EntryDropdownProps> {
  public render(): JSX.Element {
    const { titleText , subDropdown } = this.props;
    const menu = (
      <Menu>
        {subDropdown &&
          subDropdown.length > 0 &&
            subDropdown.map((subDropdown) => (
          <Menu.Item key={subDropdown.key}>
            <a href={subDropdown.link}>{subDropdown.value}</a>
          </Menu.Item>
        ))}
      </Menu>
    );
    return (
      <EntryDropdownWrapper>
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#">
            {titleText} <Icon type="down" />
          </a>
        </Dropdown>
      </EntryDropdownWrapper>
    );
  }
}

export default EntryDropdown;
