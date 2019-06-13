import React, { PureComponent } from 'react';
import { Typography } from 'antd';
import StrategyInformation from './StrategyInformation';
import { StrategyTypes } from '../../enums/strategies';
import StrategyTable from './StrategyTable';
import { Statistic } from './StatisticItem';

const Title = Typography.Title;

interface StrategyContainerProps {
  type: StrategyTypes;
  information: {
    statistic: Statistic;
    graph: any;
    expandable: object;
  };
  strategies: object[];
}

const getTitle = (type: StrategyTypes) => {
  switch (type) {
    case StrategyTypes.Superannuation:
      return 'Superannuation';
    case StrategyTypes.Pensions:
      return 'Pensions';
    case StrategyTypes.Investments:
      return 'Investments (non-super)';
    case StrategyTypes.Debt:
      return 'Debt';
    case StrategyTypes.Centrelink:
      return 'Centrelink';
    default:
      return '';
  }
};

class StrategyContainer extends PureComponent<StrategyContainerProps> {
  public render() {
    const { information, strategies, type } = this.props;
    return (
      <div>
        <Title level={4}>{getTitle(type)}</Title>
        <StrategyInformation {...information} type={type} />
        <StrategyTable strategies={strategies} />
      </div>
    );
  }
}

export default StrategyContainer;
