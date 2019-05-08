
import styled, { css } from 'styled-components';

export const EntryPickerTable = styled.section`
  display: inline-block;
  .ant-input{
    width: 125px;
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
export const DateButtonCustom = styled.div`
  padding: 8px 0px;
`;