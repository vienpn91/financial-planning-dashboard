import React from 'react';
import { Layout, Icon } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import { InputSearch, TopSearch, TopMenu, MenuItem } from './styled';

const AntHeader = Layout.Header;

class Header extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <AntHeader className="header">
        <TopMenu>
          <MenuItem key="1">
            <TopSearch>
              <Icon type="search" />
              <InputSearch placeholder="Search Here" />
            </TopSearch>
          </MenuItem>
          <MenuItem key="2">
            <FontAwesomeIcon icon={faUserCircle} size="lg" />
          </MenuItem>
        </TopMenu>
      </AntHeader>
    );
  }
}

export default Header;
