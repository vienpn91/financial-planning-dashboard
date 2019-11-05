import React, { useState } from 'react';
import { connect } from 'formik';
import { Card, Icon } from 'antd';
import numeral from 'numeral';
import { get } from 'lodash';
import { StepWrapper } from '../styled';
import { Doughnut, Bar } from 'react-chartjs-2';


import { DocumentData, FormikPartProps } from '../PresentationPage';

import {
  StepCurrentPosition,
  StepPositionLeft,
  StepPositionTop,
  StepPositionRight,
  IcomeBlockStep,
  TitlePositionStep,
  CardChartPositionStep,
  CardPointPositionStep,
  StepPositionBottom,
  ValPositionStep,
  KeyPoitItem,
  CardResultsPositionStep,
  KeyPoitList,
  ExpensesBlockStep,
  AssetsBlockStep,
  LiabilitiesBlockStep,
  DoughnutDesc,
  LineDoughnut,
  LineDoughnutText,
} from './styled';

const incomeData = {
  labels: ['Salary'],
  datasets: [
    {
      data: [120000],
      backgroundColor: ['#2bd8c4', '#2bd8c4', '#8269f8', '#2e98ff'],
      hoverBackgroundColor: ['#2bd8c4', '#2bd8c4', '#8269f8', '#2e98ff'],
    },
  ],
};

const assetData = {
  labels: [
    'Lifestyle',
    'Super',
    'Investment',
    'Cash',
  ],
  datasets: [
    {
      data: [790000, 400000, 50000, 150000],
      backgroundColor: ['#ffe701', '#2bd8c4', '#8269f8', '#2e98ff'],
      hoverBackgroundColor: ['#ffe701', '#2bd8c4', '#8269f8', '#2e98ff'],
    },
  ],
};

const chartsData = {
  asset: {
    line1: '$1,390,000',
    line2: 'Total',
    chart: assetData,
  },
  income: {
    line1: '$120,000',
    line2: 'Income',
    chart: incomeData,
  },
};

const optionsDoughnut = {
  plotOptions: {
    pie: {
      customScale: 1,
      offsetX: 0,
      offsetY: 0,
      expandOnClick: false,
      dataLabels: {
        offset: 0,
        minAngleToShowLabel: 10,
      },
    },
  },
  legend: {
    fontSize: 9,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', ' +
      '\'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif',
  },
};
const seriesBarInsurance = {
  labels: ['Life', 'TPD', 'Trauma', 'IP'],
  datasets: [
    {
      label: 'Insurance cover',
      backgroundColor: '#2e98ff',
      borderColor: '#2e98ff',
      borderWidth: 1,
      data: [500000, 500000, 150000, 840000],
    },
    {
      label: 'Needs analysis',
      backgroundColor: 'rgba(255,99,132,1)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      data: [500000, 500000, 150000, 840000],
    },
  ],
};
const defaultOptions = {
  scales: {
    yAxes: [{
        ticks: {
            // Include a dollar sign in the ticks
            callback: (value: any, index: any, values: any) => {
              return numeral(Math.round(value * 100) / 100).format('$0,0.[00]');
            },
        },
    }],
  },
  maintainAspectRatio: false,
}
const PresentationStep2 = (props: FormikPartProps) => {
  const [chartData, setChartData] = useState(chartsData.income);
  const updateChart = (key: string) => () => {
    setChartData(get(chartsData, [key]));
  };

  return (
    <StepWrapper>
      <StepCurrentPosition>
        <StepPositionLeft>
          <StepPositionTop>
            <IcomeBlockStep onClick={updateChart('income')}>
              <TitlePositionStep>Income</TitlePositionStep>
              <ValPositionStep>$120,000</ValPositionStep>
            </IcomeBlockStep>
            <ExpensesBlockStep>
              <TitlePositionStep>Expenses</TitlePositionStep>
              <ValPositionStep>$69,043</ValPositionStep>
            </ExpensesBlockStep>
            <AssetsBlockStep onClick={updateChart('asset')}>
              <TitlePositionStep>Assets</TitlePositionStep>
              <ValPositionStep>$1,390,000</ValPositionStep>
            </AssetsBlockStep>
            <LiabilitiesBlockStep>
              <TitlePositionStep>Liabilities</TitlePositionStep>
              <ValPositionStep>$300,000</ValPositionStep>
            </LiabilitiesBlockStep>
          </StepPositionTop>
          <StepPositionBottom>
            <Doughnut options={optionsDoughnut} data={get(chartData, 'chart')} redraw={true} height={200} />
            <DoughnutDesc>
              <LineDoughnut>{get(chartData, 'line1')}</LineDoughnut>
              <LineDoughnutText>{get(chartData, 'line2')}</LineDoughnutText>
            </DoughnutDesc>
          </StepPositionBottom>
        </StepPositionLeft>
        <StepPositionRight>
          <StepPositionTop>
            <CardChartPositionStep>
              <Card title="Insurance" bordered={false} style={{ width: '100%' }}>
                <Bar
                  data={seriesBarInsurance}
                  width={200}
                  height={100}
                  options={defaultOptions}
                />
              </Card>
            </CardChartPositionStep>
            <CardPointPositionStep>
              <Card title="Estate Planning" bordered={false} style={{ width: '100%' }}>
                <KeyPoitList>
                  <KeyPoitItem>
                    <Icon type="exclamation" />
                    Will
                  </KeyPoitItem>
                  <KeyPoitItem>
                    <Icon type="exclamation" />
                    PoA
                  </KeyPoitItem>
                  <KeyPoitItem>
                    <Icon type="check" />
                    Death Benefit nomination
                  </KeyPoitItem>
                  <KeyPoitItem>
                    <Icon type="exclamation" />
                    Testamentary Trust
                  </KeyPoitItem>
                </KeyPoitList>
              </Card>
            </CardPointPositionStep>
          </StepPositionTop>
          <CardResultsPositionStep>
            <Card title="Goals">
              <Card.Grid>Review your superannuation</Card.Grid>
              <Card.Grid>Retire by the age of 60</Card.Grid>
              <Card.Grid>Review your debt obligations</Card.Grid>
              <Card.Grid>Review your Investment portfolio</Card.Grid>
              <Card.Grid>Review Estate Planning arrangements</Card.Grid>
              <Card.Grid>Review exsting insurance polices</Card.Grid>
            </Card>
          </CardResultsPositionStep>
        </StepPositionRight>
      </StepCurrentPosition>
    </StepWrapper>
  );
};

export default connect<{}, DocumentData>(PresentationStep2);
