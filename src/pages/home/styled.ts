import styled, { StyledComponent, StyledFunction } from 'styled-components';
import { Button } from 'antd';
interface SelectProps {
  readonly select: string;
}

// export const TestStyled = styled.div<TestProps>`
//   background-color: ${(props) => props.size ? 'blue' : 'red'};
// `;

export const HomePage = styled.div<SelectProps>`
    min-height: calc(100vh - 60px);
    padding: 15px;
    background-image: ${(props) => props.select ? 'url(./images/bg-home-select.jpg)' : 'url(./images/bg-home.jpg)'};
    height: calc(100vh - 56px);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    display: flex;
    .ant-typography{
      margin-bottom: 10px!important;
    }
`;
export const ButtonModalFixed = styled(Button).attrs({
  className : 'btn-modal-fixed',
})`
  width: 52px!important;
  height: 52px!important;;
  font-size: 19px;
  position: fixed;
  bottom: 47px;
  right: 47px;
`;
export const HomeDesc = styled.span`
  font-size: 22px;
  color: #515c83;
  display: inline-block;
  width: 100%;
  text-align: center;
`;