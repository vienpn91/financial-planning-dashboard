import React from 'react';
import { Menu, Dropdown, Icon, Button } from 'antd';
import { EntryDropdownWrapper, EntryDropdownDefault } from './styled';
export interface EntryDropdownProps {
  titleText?: string;
  textSize?: string;
  fontWeight?: string;
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
declare type DropdownType = 'default' | 'inline' ;
class EntryDropdown extends React.PureComponent<EntryDropdownProps> {
  public render(): JSX.Element {
    const { titleText , subDropdown, type, textSize, fontWeight } = this.props;
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
      case 'inline':
        return(
          <EntryDropdownWrapper className={'text-' + textSize + ' font-' + fontWeight}>
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" href="#">
                {titleText} <Icon type="down" />
              </a>
            </Dropdown>
          </EntryDropdownWrapper>
        );
      case 'default':
        return(
          <EntryDropdownDefault className={'text-' + textSize + ' font-' + fontWeight}>
            <Dropdown overlay={menu}>
              <Button>
                {titleText} <Icon type="down" />
              </Button>
            </Dropdown>
          </EntryDropdownDefault>
        );
      default:
        return(
          <EntryDropdownDefault className={'text-' + textSize + ' font-' + fontWeight}>
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
