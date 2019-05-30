import styled from 'styled-components';

interface PrefixProps {
  dollar?: boolean;
  percent?: boolean;
}
export const PrefixGroup = styled.section<PrefixProps>`
  display: flex;
  align-items: center;
  flex-basis: 45px;
  .prefix-choose-group {
    .ant-select-enabled {
      display: none;
      &.ant-select-focused {
        display: inline-block;
      }
    }
  }
  .type-dollar-prefix {
    display: ${(props) => (props.dollar ? 'inline' : 'none')};
    position: absolute;
    left: 5px;
  }
  .type-percent-prefix {
    display: ${(props) => (props.dollar ? 'none' : 'inline')};
    position: absolute;
    right: 5px;
  }
  input {
    border: none;
    margin: 0px;
    padding: 0px;
    padding: ${(props) => (props.dollar ? '0px 0px 0px 20px' : '0px 20px 0px 0px')};
    /* margin: ${(props) => (props.dollar ? '0px 0px 0px -15px' : '0px 0px 0px 0px')}; */
    display: inline-block;
    background: transparent;
    // width: 65px;
    font-weight: 600;
    // text-align: ${(props) => (props.dollar ? 'left!important' : 'right!important')};
  }
  &:hover {
    flex-basis: 145px;
    transition: width 300ms ease;
    input {
      border: 1px solid #515c83 !important;
    }
    .prefix-choose-group {
      .ant-select-enabled {
        display: inline-block;
      }
    }
  }
`;
export const TypeDollarPrefix = styled.span.attrs({
  className: 'type-dollar-prefix',
})`
  color: #6c7596;
  font-weight: 700;
`;
export const TypePercentPrefix = styled.span.attrs({
  className: 'type-percent-prefix',
})`
  color: #6c7596;
  font-weight: 700;
`;
export const PrefixViewGroup = styled.div.attrs({
  className: 'prefix-view-group',
})`
  position: relative;
  display: flex;
  align-items: center;
`;
export const PrefixChooseGroup = styled.div.attrs({
  className: 'prefix-choose-group',
})`
  margin: 0 5px !important;
  .ant-select {
    margin-left: 0px !important;
  }
`;
export const PrefixSingleGroup = styled.section<PrefixProps>`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 3px;
  .type-percent-prefix {
    position: absolute;
    font-weight: 700;
    right: 2px;
  }
  .type-dollar-prefix {
    position: absolute;
    font-weight: 700;
    left: 4px;
  }
  input {
    margin: -2px 0px 0px 0px;
    font-weight: 700;
    ${(props) => {
      let value = '0 5px';
      if (props.dollar || props.percent) {
        value = props.dollar ? '0px 0px 0px 14px' : '0px 14px 0px 0px';
      }
      return 'padding: ' + value;
    }};
    min-width: 40px;
    text-align: left;
  }
`;
export const ExpandedAssetsGroups = styled.div.attrs({
  className: 'expanded-assets-groups',
})`
  flex-wrap: wrap;
  display: flex;
`;

export const ExpandedInsuranceGroups = styled.div.attrs({
  className: 'expanded-nsurance-groups',
})`
  flex-wrap: wrap;
  display: flex;
  padding-left: 24px;
  .ant-select-selection-selected-value{
    margin-top: -1px;
  }
`;

export const ExpandedAssetsInlineGroups = styled.div.attrs({
  className: 'expanded-assets-inline-groups',
})`
  flex: 0 0 100%;
  display: flex;
  align-items: center;
`;
export const ExpandedAssetsText = styled.span.attrs({
  className: 'expanded-assets-text',
})`
  color: #5f698d;
  font-size: 13px;
`;
export const ExpandedAssetsBlock = styled.section.attrs({
  className: 'expanded-assets-block',
})`
  display: flex;
  flex-direction: column;
`;
export const ExpandedSelectGroup = styled.div.attrs({
  className: 'expanded-select-group',
})`
  width: auto;
  min-width: 14px;
  display: flex;
  font-weight: 700;
  margin: 0 3px;
  flex-direction: column;
  .ant-calendar-picker-input {
    margin-left: 0px;
    padding-left: 0px;
    &:focus,
    &:hover{
      padding-left: 10px;
    }
  }
  .ant-select-arrow {
    right: 6px;
  }
  .ant-select{
    margin-left: 0px !important;
  }
  .ant-select-selection__rendered {
    margin: 0px !important;
  }
  .ant-select-selection-selected-value {
    padding-right: 0px !important;
  }
  .ant-select-focused{
    .ant-select-selection{
      padding-right: 15px !important;
    }
    .ant-select-selection__rendered {
      margin: 0 5px !important;
    }
  }
  &:hover {
    .ant-select-selection__rendered {
      margin: 0 5px !important;
    }
    .ant-select-selection{
      padding-right: 15px !important;
    }
  }
`;
