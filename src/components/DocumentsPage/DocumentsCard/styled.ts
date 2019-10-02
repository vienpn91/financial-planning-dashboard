import styled from 'styled-components';
import { Card } from 'antd';
export const DocumentsCardWrapper = styled.div.attrs({
  className: 'documents-card-wrapper',
})`
  margin-bottom: 50px;
  margin-top: 20px;
  flex-wrap: wrap;
  display: flex;
`;
export const CardBlock = styled(Card).attrs({
  className: 'card-documents',
})`
    cursor: pointer;
    flex:  0 0 calc(100%/3 - (40px/3));
    margin-bottom: 20px!important;
    border-color: #9599a8!important;
    border-radius: 5px!important;
    &:nth-child(3n+2){
      margin: 0px 20px 20px 20px;
    }
    .ant-card-body{
      padding: 15px;
    }
    .ant-card-head{
      min-height: 48px;
      padding: 0 15px;
      .ant-card-head-title{
        color: #515c83;
        padding: 15px 0px;
        font-size: 15px;
        font-weight: 600;
      }
    }
`;
export const CardBlockText = styled.p.attrs({
  className: 'documents-card-text',
})`
  color: #515c83;
  position: relative;
  padding-left: 15px;
  &::after{
    width: 6px;
    height: 6px;
    content: '';
    position: absolute;
    left: 0px;
    top: calc(50% - 3px);
    background: #515c83;
    border-radius: 100%;
  }
`;
