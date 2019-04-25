
import styled, { css } from 'styled-components';

export const EntryDropdownWrapper = styled.section`
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
  
`;