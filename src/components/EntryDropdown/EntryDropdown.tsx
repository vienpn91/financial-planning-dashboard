import React from 'react';
import { Menu, Dropdown, Icon, Button } from 'antd';
import { EntryDropdownWrapper, EntryDropdownDefault } from './styled';
export interface EntryDropdownProps {
  titleText?: string;
  type?: DropdownType;
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
declare type DropdownType = 'Default' | 'Inline' ;
class EntryDropdown extends React.PureComponent<EntryDropdownProps> {
  public render(): JSX.Element {
    const { titleText , subDropdown, type } = this.props;
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
    switch (type) {
      case 'Inline':
        return(
          <EntryDropdownWrapper>
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" href="#">
                {titleText} <Icon type="down" />
              </a>
            </Dropdown>
          </EntryDropdownWrapper>
        );
      case 'Default':
        return(
          <EntryDropdownDefault>
            <Dropdown overlay={menu}>
              <Button>
                {titleText} <Icon type="down" />
              </Button>
            </Dropdown>
          </EntryDropdownDefault>
        );
      default:
        return(
          <EntryDropdownDefault>
            <Dropdown overlay={menu}>
              <Button>
                {titleText} <Icon type="down" />
              </Button>
            </Dropdown>
          </EntryDropdownDefault>
        );
    }
  }
}

export default EntryDropdown;
