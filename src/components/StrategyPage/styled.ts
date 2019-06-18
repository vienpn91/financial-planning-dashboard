import styled from 'styled-components';

export const StrategyHeaderWrapper = styled.div`
  display: flex;
`;
export const GraphCard = styled.div`
  width: 250px;
  overflow: hidden;
  position: relative;
  padding: 20px 20px;
  margin-right: 30px;
  min-width: 280px;
  height: 195px;
  background: #fff;
  border-radius: .35rem;
  box-shadow: 4px 4px 10px 3px rgba(100, 100, 101, 0.21), 0 0 15px rgba(115,162,208,0.06);
  box-sizing: border-box;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: slideOutUp;
  &.active{
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: slideInUp;
  }
`;
export const GraphTitle = styled.div`
  display: inline-block;
  width: 100%;
  font-size: 16px;
  color: #4e5b86;
  margin-bottom: 10px;
  .anticon-info-circle{
    margin-right: 5px;
  }
`;
