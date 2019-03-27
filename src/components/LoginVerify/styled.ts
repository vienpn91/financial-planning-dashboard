
import styled,{ keyframes } from 'styled-components';

export const LoginVerifyWrap = styled.section`
    position: relative;
    z-index: 1;
    background-color: #fff;
    overflow: hidden;
    width: 534px;
    border-radius: 10px;
    h2.ant-typography{
      margin: 30px 0px 0px;
    }
    .login-form-button{
      margin-top: 10px;
      float: right;
      margin-bottom: 30px;
      margin-left : 10px;
    }
    .verify-form{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .ant-form-item{
        margin-left: 20px;
        &:first-child{
          margin-left: 0px;
        }
        &:last-child{
          flex: 0 0 100%;
          margin-bottom: 0px;
        }
      }
    }
    .ant-input{
      width: 50px;
      height: 40px;
      font-size: 20px;
      color: #252525;
      padding: 0px;
      text-align: center;
      &:focus{
        & + span{
          display: none;
        }
      }
    }

`;
export const SubHeading = styled.span`
    font-size: 18px;
    color: #252525;
    display: inline-block;
    text-align: center;
    margin: 20px 0px;
    width: 100%;
`;

export const ResendCode = styled.section`
  font-size: 14px;
  color: #515c83;
  display: inline-block;
  text-align: center;
  margin: 20px 0px;
  width: 100%;
  span{
    margin-right: 10px;
    margin-left: 10px;
  }
  i{
    color: '#192a6f'
  }
  a{
    color: #0036F4;
  }
`;
