import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import { Line } from 'react-chartjs-2';
import { Typography } from 'antd';
import StatisticItem, { Statistic } from './StatisticItem';
import { GraphCard, GraphTitle } from './styled';
import { StrategyTypes } from '../../enums/strategies';
const { Paragraph } = Typography;
import {
  StrategyInfoWrapper
} from './styled';


interface StrategyInformationProps {
  type: StrategyTypes;
  statistic: Statistic;
  graph: any;
  expandable: object;
}

const data = {
  labels: ['19', '20', '21', '22', '23', '24', '25'],
  datasets: [
    {
      label: '',
      fill: false,
      borderColor: '#FF5722',
      data: [165000, 159000, 120000, 165000, 235000, 120000, 140000],
    },
    {
      label: '',
      fill: false,
      borderColor: '#00BCD4',
      data: [85000, 45000, 70000, 65000, 100000, 150000, 135000],
    },
  ],
};

class StrategyInformation extends PureComponent<StrategyInformationProps> {
  public render() {
    const { statistic, type } = this.props;
    switch (type) {
      case StrategyTypes.Superannuation: {
        return (
          <StrategyInfoWrapper>
            <StatisticItem {...statistic} title={'Accumulation balance'} subTitle={'At retirement'} />
            <GraphCard>
              <GraphTitle>
                <Icon type="info-circle" theme="filled" />
                Superannuation balance
              </GraphTitle>
              <Line
                data={data}
                options={{
                  legend: {
                    display: false,
                  },
                }}
              />
            </GraphCard>
            <div>
              <Paragraph>
                Superanuation funds will continue to be invested in line with your <b>xx</b> risk profile
              </Paragraph>
              <Paragraph>
                Product fees of <b>x.x%</b> factored in superannuation value
              </Paragraph>
              <Paragraph>Funds transferred into pension phase at retirement</Paragraph>
            </div>
          </StrategyInfoWrapper>
        );
      }
      case StrategyTypes.Pensions: {
        return (
          <StrategyInfoWrapper>
            <StatisticItem {...statistic} title={'Average pension income'} subTitle={'Per annum paid until'} />
            <GraphCard>
              <GraphTitle>
                <Icon type="info-circle" theme="filled" />
                Superannuation balance
              </GraphTitle>
              <Line
                data={data}
                options={{
                  legend: {
                    display: false,
                  },
                }}
              />
            </GraphCard>
            <div>
              <Paragraph>
                Superanuation funds will continue to be invested in line with your <b>xx</b> risk profile
              </Paragraph>
              <Paragraph>
                Product fees of <b>x.x%</b> factored in superannuation value
              </Paragraph>
              <Paragraph>Funds transferred into pension phase at retirement</Paragraph>
            </div>
          </StrategyInfoWrapper>
        );
      }
      case StrategyTypes.Investments: {
        return (
          <StrategyInfoWrapper>
            <StatisticItem {...statistic} title={'Cash reserve'} subTitle={'At age'} />
            <GraphCard>
              <GraphTitle>
                <Icon type="info-circle" theme="filled" />
                Superannuation balance
              </GraphTitle>
              <Line
                data={data}
                options={{
                  legend: {
                    display: false,
                  },
                }}
              />
            </GraphCard>
            <div>
              <Paragraph>
                Superanuation funds will continue to be invested in line with your <b>xx</b> risk profile
              </Paragraph>
              <Paragraph>
                Product fees of <b>x.x%</b> factored in superannuation value
              </Paragraph>
              <Paragraph>Funds transferred into pension phase at retirement</Paragraph>
            </div>
          </StrategyInfoWrapper>
        );
      }
      case StrategyTypes.Debt: {
        return (
          <StrategyInfoWrapper>
            <StatisticItem
              {...statistic}
              title={'Total interest cost'}
              subTitle={'non-deductible debt over loan period'}
            />
            <GraphCard>
              <GraphTitle>
                <Icon type="info-circle" theme="filled" />
                Superannuation balance
              </GraphTitle>
              <Line
                data={data}
                options={{
                  legend: {
                    display: false,
                  },
                }}
              />
            </GraphCard>
            <div>
              <Paragraph>
                Superanuation funds will continue to be invested in line with your <b>xx</b> risk profile
              </Paragraph>
              <Paragraph>
                Product fees of <b>x.x%</b> factored in superannuation value
              </Paragraph>
              <Paragraph>Funds transferred into pension phase at retirement</Paragraph>
            </div>
          </StrategyInfoWrapper>
        );
      }
      case StrategyTypes.Centrelink: {
        return (
          <StrategyInfoWrapper>
            <StatisticItem {...statistic} title={'Centrelink income'} />
            <GraphCard>
              <GraphTitle>
                <Icon type="info-circle" theme="filled" />
                Superannuation balance
              </GraphTitle>
              <Line
                data={data}
                options={{
                  legend: {
                    display: false,
                  },
                }}
              />
            </GraphCard>
            <div>
              <Paragraph>
                Superanuation funds will continue to be invested in line with your <b>xx</b> risk profile
              </Paragraph>
              <Paragraph>
                Product fees of <b>x.x%</b> factored in superannuation value
              </Paragraph>
              <Paragraph>Funds transferred into pension phase at retirement</Paragraph>
            </div>
          </StrategyInfoWrapper>
        );
      }
      default:
        return <div>No data</div>;
    }
  }
}

export default StrategyInformation;
