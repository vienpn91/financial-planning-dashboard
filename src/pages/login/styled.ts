import styled from 'styled-components';

export const LoginMain = styled.div`
  background-image: url(./images/bg-login.svg);
  height: calc(100vh - 56px);
  background-repeat: no-repeat;
  background-position: center 80%;
  background-size: 100%;
  &:after{
    content:'';
    width: 100%;
    height: calc(100vh - 56px);
    position: absolute;
    top: 46px;
    left: 0px;
    background:rgba(54, 46, 69, .3);
  }
`;
