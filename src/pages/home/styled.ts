import styled, { StyledComponent, StyledFunction } from 'styled-components';

// interface TestProps {
//   readonly size: string;
// }

// export const TestStyled = styled.div<TestProps>`
//   background-color: ${(props) => props.size ? 'blue' : 'red'};
// `;

export const HomePage = styled.div`
    min-height: calc(100vh - 60px);
    padding: 15px;
    background-image: url(./images/bg-home.jpg);
    height: calc(100vh - 56px);
    background-repeat: no-repeat;
    background-position: center 80%;
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
`;
