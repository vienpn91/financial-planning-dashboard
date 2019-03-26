import styled from 'styled-components';
import { Input } from 'antd';

export const TopMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 46px;
  box-shadow: 0 2px 4px 0px rgba(0,0,0,0.23);
  padding: 0px 25px;
`;

export const InputSearch = styled(Input)`
  border: none;
  margin-left: 10px;
  color: #515C83;
  &:focus{
    outline: none;
    border: none;
    box-shadow: none;
  }
`;

export const TopSearch = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.div`
  display: flex;
  color: #515C83;
`;