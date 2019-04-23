import React from 'react';
import { Skeleton, Icon, Avatar } from 'antd';

import {
  SiderCollapsible,
  ClientInfo,
  FullName,
  ClientItem,
  SubList,
  StatusItem,
  DateItem,
  StatusTags,
  ClientSide,
  SkeletonClient
} from './styled';
import { default as ModalNameAndBirthDay } from '../../components/NameAndBirthDay/NameAndBirthDay';

/* ClientItem
 *    ClientInfo
 *      Avatar
 *      Full Name
 *
 *    SubsList
 *      StatusItem
 *      StatusItem
 *      StatusItem
 */

interface SidebarProps {
  tagName?: string;
}
class Sidebar extends React.PureComponent<SidebarProps> {
  public state = {
    collapsed: false,
    loading: true,
  };
  public toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  public ClientItemRender = (tagName: string) => {
    const { loading } = this.state;
    return (
      <SkeletonClient loading={loading} active avatar>
        <ClientItem
          key={tagName}
          title={
            <StatusItem>
              <DateItem>15/03/2018</DateItem>
              <StatusTags tagName={tagName}>{tagName}</StatusTags>
            </StatusItem>
          }
        >
          <SubList key="1">
            <Icon type="environment" />
            <span>Current</span>
          </SubList>
          <SubList key="2">
            <Icon type="solution" />
            <span>Strategy</span>
          </SubList>
          <SubList key="3">
            <Icon type="area-chart" />
            <span>Switching</span>
          </SubList>
          <SubList key="4">
            <Icon type="file" />
            <span>Documents</span>
          </SubList>
          <SubList key="5">
            <Icon type="file-ppt" />
            <span>Presentation</span>
          </SubList>
        </ClientItem>
      </SkeletonClient>
    );
  }
  public render(): JSX.Element {
    return (
      <SiderCollapsible width={295} trigger={null} collapsible collapsed={this.state.collapsed}>
        <ClientInfo>
          <Avatar size={56} style={{ color: '#fff', backgroundColor: '#383f5b' }}>
            JS
          </Avatar>
          <FullName>John Samual</FullName>
        </ClientInfo>
        <Icon
          className="trigger IconSider"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggleCollapsed}
        />
        <ClientSide defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
          {this.ClientItemRender('new')}
          {this.ClientItemRender('position')}
          {this.ClientItemRender('strategy')}
          {this.ClientItemRender('products')}
          {this.ClientItemRender('advice')}
          {this.ClientItemRender('done')}
        </ClientSide>
        <ModalNameAndBirthDay />
      </SiderCollapsible>
    );
  }
}

export default Sidebar;
