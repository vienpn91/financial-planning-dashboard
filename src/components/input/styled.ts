import styled from 'styled-components';
import { Input } from 'antd';

export const InputWrapper= styled.div`
  position: relative;
`;

export const InputLogin = styled(Input)`
  border: 1px solid #515C83;
  position: relative;
  background: transparent;
  z-index: 1;
  height: 46px;
  padding: 0px 20px;
  &:hover{
    border-color: rgb(116, 126, 169);
  }
  &:focus{
    outline: none;
    transition: all ease 300ms;
    box-shadow: none;
    border-color: rgb(116, 126, 169);
    & + span{
      top: -10px;
    font-size: 14px;
    background: #fff;
    height: 20px;
    line-height: 20px;
    z-index: 1;
    padding: 0px 10px;
    left: 10px;
    }
  }
`;

export const InputLabel = styled.span`
  position: absolute;
  transition: all ease 300ms;
  font-size: 16px;
  background: transparent;
  left: 20px;
  color: rgba(81, 92, 131, .5);
  top: calc(50% - 20px);
  z-index: 0;
`;
