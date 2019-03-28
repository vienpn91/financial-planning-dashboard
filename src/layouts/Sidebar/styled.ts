import styled, { StyledComponent, StyledFunction, css } from 'styled-components';
import { Menu } from 'antd';
import { get } from 'lodash-es';

const SubMenu = Menu.SubMenu;
export const ClientInfo = styled.div``;

// ant-menu-submenu-open ant-menu-submenu-active
// aria-owns="sub"
export const FullName = styled.span`
  font-size: 18px;
  color: #515C83;
  margin-left: 15px;
`;
export const ClientSide = styled(Menu).attrs({
    className: 'client-side-modify',
  })`
  border-right: none!important;
  .client-item-modify {
    .ant-menu-submenu-title  {
      &[aria-expanded]{
        padding: 0 10px !important;
      }
    }
  }
`;

export const ClientItem = styled(SubMenu).attrs({
    className: 'client-item-modify',
  })`
  .ant-menu-submenu-title{
    height: 70px!important;
    line-height: 68px!important;
    width: calc(100% - 10px)!important;
    margin: 0 auto !important;
    border-radius: 5px;
    /* background: #E0E3E8; */
    position: relative;
    &:hover{
      background-color: #E0E3E8;
    }
  }
  .ant-menu-sub{
    border-top: 1px solid #D8D8D8!important;
    border-bottom: 1px solid #D8D8D8!important;
    padding-top: 5px!important;
    margin-top: 5px !important;
  }
`;

export const StatusList = styled(Menu.Item).attrs({
    className: 'status-list-modify',
  })`
  margin: 0px !important;
  padding: 0px 10px;
`;

export const StatusItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
export const DateItem = styled.span`
  font-size: 12px;
  position: relative;
  padding-left: 20px;
  color: #515C83;
  &:after{
    content: '';
    width: 10px;
    height: 10px;
    background: #D8D8D8;
    display: inline-block;
    border-radius: 100%;
    position: absolute;
    left: 0px;
    top: calc(50% - 5px);
  }
`;

interface StatusTags {
  readonly tagName: string;
}

export const StatusTags = styled.span<StatusTags>`
  font-size: 10px;
  width: 96px;
  display: inline-block;
  height: 17px;
  border-radius: 8px;
  text-align: center;
  line-height: 17px;
  color: ${({ tagName, theme }) => get(theme, `colors.text-${tagName}`)};
  background-color: ${({ tagName, theme }) => get(theme, `colors.bg-${tagName}`)};
`;