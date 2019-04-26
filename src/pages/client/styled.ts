import styled from 'styled-components';

export const TableEntryContainer = styled.section.attrs({
  className: 'table-entry-container',
})`
  padding: 20px;
  .ant-table-thead > tr > th{
    background-color: #eaedef;
    color: #505c84;
    font-weight:900;
  }
`;
export const HeaderTitleTable = styled.div.attrs({
  className: 'table-entry-header',
})`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  i{
    font-size: 24px;
    color: #072074;
  }
`;
export const TextTitle = styled.span`
  color: #072074;
  font-size: 21px;
  margin-left: 10px;

`;
