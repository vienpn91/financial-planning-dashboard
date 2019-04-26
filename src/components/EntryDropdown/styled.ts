
import styled, { css } from 'styled-components';

export const EntryDropdownWrapper = styled.section`
  display: inline;
  margin-left: 8px;
  width: auto;
  a{
    color: #202c56;
    text-decoration: none;
  }
  &.font-bold{
    font-weight: 800;
  }
  &.text-small{
    font-size: 12px
  }
  &.text-default{
    font-size: 14px
  }
  i[aria-label="icon: down"]{
    opacity: 0;
  }
  .ant-dropdown-open{
    i[aria-label="icon: down"]{
      opacity: 1;
    }
  }
  &:hover{
    i[aria-label="icon: down"]{
      opacity: 1;
    }
  }
`;
export const EntryDropdownDefault = styled.section`
  display: inline;
  &.font-bold{
    font-weight: 800;
  }
  &.text-small{
    font-size: 12px
  }
  &.text-default{
    font-size: 14px
  }
`;