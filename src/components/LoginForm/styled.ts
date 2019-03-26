
import styled,{ keyframes } from 'styled-components';

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
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
    .current{
      display: inline-block;
      animation: ${fadeInLeft} 2s linear ;
      padding: 2rem 1rem;
      font-size: 1.2rem;
    }
    .next{
      display: none;
    }
`;
