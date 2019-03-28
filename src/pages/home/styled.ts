import styled, { StyledComponent, StyledFunction } from 'styled-components';

interface TestProps {
  readonly size: string;
}

export const TestStyled = styled.div<TestProps>`
  background-color: ${(props) => props.size ? 'blue' : 'red'};
`;
