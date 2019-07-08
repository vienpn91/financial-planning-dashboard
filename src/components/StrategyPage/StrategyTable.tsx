import React, { PureComponent } from 'react';
import { Cascader, Icon } from 'antd';
import { HeaderTitleTable, TextTitle } from '../../pages/client/styled';
import { CascaderOptionType } from 'antd/lib/cascader';

interface StrategyTableProps {
  strategies: object[];
}

const options = [
  {
    value: 'client',
    label: 'Client',
    children: [
      {
        value: 'salarySacrifice',
        label: 'Salary Sacrifice',
        children: [
          {
            value: 'maximise',
            label: 'Maximise',
          },
          {
            value: 'fixedRegular',
            label: 'Fixed - regular',
          },
          {
            value: 'customOneOff',
            label: 'Custom - one off',
          },
        ],
      },
      {
        value: 'nonConcessional contribution',
        label: 'Non-concessional contribution',
        children: [
          {
            value: 'maximise',
            label: 'Maximise',
          },
          {
            value: 'fixedRegular',
            label: 'Fixed - regular',
          },
          {
            value: 'customOneOff',
            label: 'Custom - one off',
          },
        ],
      },
      {
        value: 'personalDeductible',
        label: 'Personal deductible contributions',
        children: [
          {
            value: 'maximise',
            label: 'Maximise',
          },
          {
            value: 'fixedRegular',
            label: 'Fixed - regular',
          },
          {
            value: 'customOneOff',
            label: 'Custom - one off',
          },
        ],
      },
      {
        value: 'spouse',
        label: 'Spouse contribution',
        children: [
          {
            value: 'oneOff',
            label: 'One off',
          },
          {
            value: 'regular',
            label: 'Regular',
          },
        ],
      },
    ],
  },
  {
    value: 'partner',
    label: 'Partner',
    children: [
      {
        value: 'salarySacrifice',
        label: 'Salary Sacrifice',
        children: [
          {
            value: 'maximise',
            label: 'Maximise',
          },
          {
            value: 'fixedRegular',
            label: 'Fixed - regular',
          },
          {
            value: 'customOneOff',
            label: 'Custom - one off',
          },
        ],
      },
      {
        value: 'nonConcessional contribution',
        label: 'Non-concessional contribution',
        children: [
          {
            value: 'maximise',
            label: 'Maximise',
          },
          {
            value: 'fixedRegular',
            label: 'Fixed - regular',
          },
          {
            value: 'customOneOff',
            label: 'Custom - one off',
          },
        ],
      },
      {
        value: 'personalDeductible',
        label: 'Personal deductible contributions',
        children: [
          {
            value: 'maximise',
            label: 'Maximise',
          },
          {
            value: 'fixedRegular',
            label: 'Fixed - regular',
          },
          {
            value: 'customOneOff',
            label: 'Custom - one off',
          },
        ],
      },
      {
        value: 'spouse',
        label: 'Spouse contribution',
        children: [
          {
            value: 'oneOff',
            label: 'One off',
          },
          {
            value: 'regular',
            label: 'Regular',
          },
        ],
      },
    ],
  },
];

class StrategyTable extends PureComponent<StrategyTableProps> {
  public onChange = (value: string[], selectedOptions?: CascaderOptionType[]): void => {
    console.log(value);
  }

  public render() {
    return (
      <>
        <HeaderTitleTable>
          <Cascader
            popupClassName="cascader-customize"
            options={options}
            onChange={this.onChange}
            value={[]}
            expandTrigger="hover"
          >
            <Icon type={'plus-square'} theme={'filled'} />
          </Cascader>
          <TextTitle small={true}>Strategy</TextTitle>
        </HeaderTitleTable>
        <div>Content</div>
      </>
    );
  }
}

export default StrategyTable;
