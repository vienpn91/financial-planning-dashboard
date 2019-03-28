import React from 'react';
import { Menu, Icon, Layout, Avatar} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Sider } = Layout;
import { ClientInfo, FullName, ClientItem, StatusList, StatusItem, DateItem, StatusTags, ClientSide } from './styled';

/* ClientItem
*    ClientInfo
*      Avatar
*      Full Name
*
*    StatusList
*      StatusItem
*      StatusItem
*      StatusItem
*/

class Sidebar extends React.PureComponent {
  public state = {
    collapsed: false,
  };
  public toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  public render(): JSX.Element {
    return (
      <Sider width={295} trigger={null} collapsible collapsed={this.state.collapsed}>
        <Icon
          className="trigger IconSider"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggleCollapsed}
        />
        <ClientSide
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <ClientItem
            key="sub1"
            title = {
              <ClientInfo>
                <Avatar
                  size={46}
                  style={{ color: '#fff', backgroundColor: '#3B415C' }}>
                  JS
                </Avatar>
                <FullName>John Samual</FullName>
              </ClientInfo>
            }
          >
            <StatusList key="1">
              <StatusItem>
                <DateItem>15/03/2018</DateItem>
                <StatusTags tagName="position">Position</StatusTags>
              </StatusItem>
            </StatusList>
            <StatusList key="2">
              <StatusItem>
                <DateItem>23/02/2017</DateItem>
                <StatusTags tagName="strategy">Strategy</StatusTags>
              </StatusItem>
            </StatusList>
            <StatusList key="3">
              <StatusItem>
                <DateItem>23/02/2017</DateItem>
                <StatusTags tagName="products">Products</StatusTags>
              </StatusItem>
            </StatusList>
            <StatusList key="4">
              <StatusItem>
                <DateItem>23/02/2017</DateItem>
                <StatusTags tagName="advice">Advice</StatusTags>
              </StatusItem>
            </StatusList>
            <StatusList key="5">
              <StatusItem>
                <DateItem>23/02/2017</DateItem>
                <StatusTags tagName="done">Done</StatusTags>
              </StatusItem>
            </StatusList>
          </ClientItem>
        </ClientSide>
      </Sider>
    );
  }
}

export default Sidebar;
