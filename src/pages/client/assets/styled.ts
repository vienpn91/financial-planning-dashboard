import styled from 'styled-components';

export const EditableCellWrap = styled.section.attrs({
  className: 'editable-cell-value-wrap',
  })`
  border: 1px solid transparent;
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
  margin-left: -10px;
  &:hover{
    border-color: #d9d9d9;
    transition: all 300ms ease;
  }
`;
export const EditableCellGroup = styled.section.attrs({
  className: 'editable-cell-group',
  })`

`;
export const ValueEditCell = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    width: 100%;
`;