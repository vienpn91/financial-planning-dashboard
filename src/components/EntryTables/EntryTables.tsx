import React from 'react';
import {
  Table, Badge, Menu, Dropdown, Icon,
} from 'antd';

declare const TITLE_ELE_LIST: [1, 2, 3, 4];
export interface HeadingProps {
  columns?: string;
  data?: (typeof TITLE_ELE_LIST)[number];
  pageSize?: (typeof TITLE_ELE_LIST)[number];
}
const menu = (
  <Menu>
    <Menu.Item>
      Action 1
    </Menu.Item>
    <Menu.Item>
      Action 2
    </Menu.Item>
  </Menu>
);

class EntryTables extends React.PureComponent {
  
   public render(): JSX.Element {
    return(
      <div>abc</div>
    )
  }
}
export default EntryTables;
