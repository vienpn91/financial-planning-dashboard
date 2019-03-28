
import styled from 'styled-components';

export const LoginFormWrap = styled.section`
    position: relative;
    z-index: 1;
    background-color: #fff;
    overflow: hidden;
    width: 534px;
    border-radius: 10px;
    .ant-btn-primary[disabled]{
    }
    .login-form-button{
      margin-top: 10px;
      box-shadow: 0 3px 7px -2px rgba(0, 0, 0, 0.5);
      float: right;
      width: 76px;
      border: none;
      height: 32px;
      margin-left : 10px;
      margin-bottom: 30px;
    }
`;
