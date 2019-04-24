
import styled, { css } from 'styled-components';

export const EntryInputNumberWrapper = styled.section`
 &.text-bold{
   .ant-input-number{
     border: 1px solid transparent;
     font-size: 12px;
     input{
      font-weight: 800;
     }
   }
   &:hover{
    .ant-input-number{
      border: 1px solid #d9d9d9
    }
   }
 }
`;
export const EntryInputWrapper = styled.section`
  width: auto;
  input{
    width: auto;
    border: 1px solid transparent;
  }
  &:hover{
    input{
      border: 1px solid #d9d9d9
    }
  }
`;
