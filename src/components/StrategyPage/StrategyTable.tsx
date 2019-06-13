import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import { TextTitle } from '../../pages/client/styled';

interface StrategyTableProps {
  strategies: object[];
}

class StrategyTable extends PureComponent<StrategyTableProps> {
  public render() {
    return (
      <div>
        <Icon type={'plus-square'} theme={'filled'} />
        <TextTitle small={true}>Strategy</TextTitle>
      </div>
    );
  }
}

export default StrategyTable;
