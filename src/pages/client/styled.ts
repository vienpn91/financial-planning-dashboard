import styled from 'styled-components';

interface HeaderTitleTableProps {
  small?: boolean;
}

interface TextTitleProps {
  small?: boolean;
}

export const TableEntryContainer = styled.section.attrs({
  className: 'table-entry-container',
})`

  padding: 20px;
  /* table layout here */
  .table-general{
    .ant-row.ant-form-item{
      margin: 0px;
      width: 100%;
      .ant-form-item-children{
        & > div{
          margin: 0px;
        }
      }
    }
    input{
      border-color: #d9d9d9;
      margin-left: -10px;
      cursor: pointer;
      min-height: 35px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 0 10px;
      transition: all 300ms ease;
      height: 35px;
    }
  }
  .ant-table-tbody{
    & > tr {
      &:hover{
        }
      }
    }
  }
  .ant-table-expand-icon-th,
  .ant-table-row-expand-icon-cell{
    width: 40px;
    padding: 16px 0px;
    min-width: 40px;
  }
  .ant-table-tbody > tr > td{
    padding: 10px;
  }
  .ant-table-thead > tr > th{
    background-color: #eaedef;
    color: #505c84;
    padding: 16px 10px;
    font-weight: 600;
  }
`;

export const HeaderTitleTable = styled.div.attrs({
  className: 'table-entry-header',
})<HeaderTitleTableProps>`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  i{
    font-size: ${(props) => props.small ? '16px' : '24px'};
    color: #072074;
    margin-right: 10px;
  }
`;

export const TextTitle = styled.span<TextTitleProps>`
  color: #072074;
  font-size: ${(props) => props.small ? '14px' : '21px'};
`;

export const DivideLine = styled.span`
  background-color: #e8e8e8;
  height: 1px;
  flex: 1;
  margin-left: 10px;
`;

export const InnerTableContainer = styled.section`
  color: #072074;
  font-size: 21px;
  .ant-table-wrapper{
    margin-left: -38px;
  }
  .ant-table-small {
    border: none;
    & > .ant-table-content > .ant-table-body {
      margin: 0;
    }
    .ant-table-thead > tr > th {
      background-color: #eaedef;
      color: #505c84;
      font-weight: normal;
      font-size: 12px;
    }
    & > .ant-table-content > .ant-table-body > table > .ant-table-thead > tr > th {
      border-bottom: none;
      padding: 0;
      padding: 2px 0;
    }
    & > .ant-table-content > .ant-table-body > table > .ant-table-tbody > tr {
      position: relative;
      &:hover:not(.ant-table-expanded-row) > td {
        background: initial;
      }
    }
    & > .ant-table-content > .ant-table-body > table > .ant-table-tbody > tr > td {
      border-bottom: none;
      padding: 2px 0;
      width: 20px;
      &.operation {
      }
    }
  }
`;
