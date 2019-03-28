import React from 'react';
import { Layout, Icon, Avatar } from 'antd';
import { InputSearch, TopSearch, TopMenu, MenuItem } from './styled';

const AntHeader = Layout.Header;

class Header extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <AntHeader className="header">
        <TopMenu className="topmenu">
          <MenuItem key="1">
            <TopSearch>
              <Icon type="search" />
              <InputSearch placeholder="Search Here" />
            </TopSearch>
          </MenuItem>
          <MenuItem key="2">
            <Avatar size={32} icon="user" />
          </MenuItem>
        </TopMenu>
      </AntHeader>
    );
  }
}

export default Header;
