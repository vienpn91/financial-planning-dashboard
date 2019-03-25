import styled from 'styled-components';
import { Typography } from 'antd';

const { Title } = Typography;

export const LoginMain = styled.div`
  background-image: url(./images/bg-login.svg);
  height: calc(100vh - 56px);
  background-repeat: no-repeat;
  background-position: center 80%;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:after{
    content:'';
    width: 100%;
    height: calc(100vh - 46px);
    position: absolute;
    top: 46px;
    left: 0px;
    background:rgba(54, 46, 69, .3);
  }
`;
export const LoginFormWrap = styled.section`
    position: relative;
    z-index: 1;
    background-color: #fff;
    overflow: hidden;
    width: 534px;
    border-radius: 10px;
    .login-form-button{
      margin-top: 10px;
      float: right;
      margin-bottom: 30px;
    }
`;

export const TitleLogin = styled(Title)`
  &.ant-typography{
    font-size: 34px;
    color: #252525;
    text-align: center;
    margin: 35px 0px 45px 0px;
  }
`;