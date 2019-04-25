
import styled, { css } from 'styled-components';

export const EntryPickerTable = styled.section`
  display: inline-block;
  margin-right: 10px;
  margin: 5px 0px 5px 10px;
  .ant-input{
    width: 110px;
  }
  &.has-none{
    .anticon-calendar{
      display: none;
    }
    .ant-calendar-picker-input{
      border: 1px solid transparent;
      &:hover{
        border: 1px solid rebeccapurple;
      }
    }
  }
  &.text-small{
    .ant-input{
      font-size: 12px;
    }
  }
  &.font-bold{
    .ant-input{
      font-weight: 800;
    }
  }
`;
