import styled, { css } from 'styled-components';
import { Input } from 'antd';

const generalInput = css`
  border: 1px solid #515c83;
  position: relative;
  background: transparent;
  z-index: 1;
  height: 46px;
  padding: 0px 20px;
  &:hover {
    border-color: rgb(116, 126, 169);
  }
  &:focus {
    outline: none;
    transition: all ease 200ms;
    box-shadow: none;
    border-color: rgb(116, 126, 169);
  }
`;

export const InputLabel = styled.span`
  position: absolute;
  transition: all ease 200ms;
  font-size: 16px;
  background: transparent;
  left: 20px;
  color: rgba(81, 92, 131, 0.5);
  top: calc(50% - 20px);
  z-index: 0;
`;

export const InputWrapper = styled.div`
  position: relative;
  input{
    ${generalInput};
    &:focus {
      & + span {
        top: -10px;
        font-size: 14px;
        background: #fff;
        height: 20px;
        line-height: 20px;
        z-index: 1;
        padding: 0px 10px;
        left: 10px;k
      }
    }
  }
`;

export const InputLogin = styled(Input)``;

export const PasswordWrapper = styled.div`
  position: relative;
  input {
    ${generalInput};
    padding: 0 30px 0 20px;
    &:focus {
      .title {
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
  }
`;

export const PasswordLogin = styled(Input.Password)`
`;
