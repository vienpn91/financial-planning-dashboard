import React from 'react';
import { Line, Scatter } from 'react-chartjs-2';
import { GraphCard, GraphTitle, StrategyHeaderWrapper } from './styled';
import { Icon } from 'antd';

const data = {
  labels: ['19', '20', '21', '22', '23', '24', '25'],
  datasets: [
    {
      label: '',
      fill: false,
      lineTension: 0.6,
      // backgroundColor: '#fff',
      borderColor: '#FF5722',
      // borderCapStyle: 'butt',
      // borderDash: [],
      // borderDashOffset: 0.0,
      // borderJoinStyle: 'miter',
      // pointBorderColor: 'rgba(75,192,192,1)',
      // pointBackgroundColor: '#fff',
      // pointBorderWidth: 1,
      // pointHoverRadius: 5,
      // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      // pointHoverBorderColor: 'rgba(220,220,220,1)',
      // pointHoverBorderWidth: 2,
      // pointRadius: 1,
      // pointHitRadius: 10,
      data: [30000, 200000, 80000, 155000, 166000, 220000, 380000],
    },
    {
      label: '',
      fill: false,
      lineTension: 0.6,
      // backgroundColor: '#fff',
      borderColor: '#00BCD4',
      // borderCapStyle: 'butt',
      // borderDash: [],
      // borderDashOffset: 0.0,
      // borderJoinStyle: 'miter',
      // pointBorderColor: 'rgba(75,192,192,1)',
      // pointBackgroundColor: '#fff',
      // pointBorderWidth: 1,
      // pointHoverRadius: 5,
      // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      // pointHoverBorderColor: 'rgba(220,220,220,1)',
      // pointHoverBorderWidth: 2,
      // pointRadius: 1,
      // pointHitRadius: 10,
      data: [30000, 140000, 120000, 166000, 180000, 191000, 256000],
    },
    {
      label: '',
      fill: false,
      lineTension: 0.6,
      // backgroundColor: '#fff',
      borderColor: '#FFC107',
      // borderCapStyle: 'butt',
      // borderDash: [],
      // borderDashOffset: 0.0,
      // borderJoinStyle: 'miter',
      // pointBorderColor: 'rgba(75,192,192,1)',
      // pointBackgroundColor: '#fff',
      // pointBorderWidth: 1,
      // pointHoverRadius: 5,
      // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      // pointHoverBorderColor: 'rgba(220,220,220,1)',
      // pointHoverBorderWidth: 2,
      // pointRadius: 1,
      // pointHitRadius: 10,
      data: [30000, 80000, 50000, 70000, 60000, 90000, 100000],
    },
  ],
};
const data2 = {
  labels: ['19', '20', '21', '22', '23', '24', '25'],
  datasets: [
    {
      label: '',
      fill: false,
      borderColor: '#FF5722',
      steppedLine: true,
      data: [165000, 159000, 120000, 165000, 235000, 120000, 140000],
    },
    {
      label: '',
      fill: false,
      borderColor: '#00BCD4',
      steppedLine: true,
      data: [85000, 45000, 70000, 65000, 100000, 150000, 135000],
    },
  ],
};
const data3 = {
  labels: ['19', '20', '21', '22', '23', '24', '25'],
  datasets: [
    {
      label: '',
      fill: false,
      lineTension: 0,
      borderColor: '#FF5722',
      data: [65000, 59000, 80000, 91000, 135000, 120000, 140000],
    },
  ],
};

const scatterData = {
  datasets: [
    {
      label: 'My First dataset',
      type: 'bubble',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(103, 58, 183, 0.8)',
      pointBorderColor: 'rgba(103, 58, 183, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(103, 58, 183, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        { x: 65, y: 75 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 18 },
      ],
    },
    {
      label: '',
      type: 'line',
      fill: false,
      borderColor: '#FF5722',
      backgroundColor: 'rgba(218,83,79, .7)',
      pointRadius: 0,
      data: [
        { x: 65, y: 75 },
        { x: 59, y: 49 },
        { x: 80, y: 90 },
        { x: 81, y: 29 },
        { x: 56, y: 36 },
        { x: 55, y: 25 },
        { x: 40, y: 18 },
      ],
    },
  ],
};

const StrategyHeader = () => {
  return (
    <StrategyHeaderWrapper>
      <GraphCard>
        <GraphTitle>
          <Icon type="info-circle" theme="filled" />
          Name 1
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
      <GraphCard>
        <GraphTitle>
          <Icon type="info-circle" theme="filled" />
          Name 2
        </GraphTitle>
        <Line
          data={data2}
          options={{
            legend: {
              display: false,
            },
          }}
        />
      </GraphCard>
      <GraphCard>
        <GraphTitle>
          <Icon type="info-circle" theme="filled" />
          Name 3
        </GraphTitle>
        <Line
          data={data3}
          options={{
            legend: {
              display: false,
            },
          }}
        />
      </GraphCard>
      <GraphCard>
        <GraphTitle>
          <Icon type="info-circle" theme="filled" />
          Name 4
        </GraphTitle>
        <Scatter
          data={scatterData}
          options={{
            legend: {
              display: false,
            },
            scales: {
              xAxes: [
                {
                  type: 'linear',
                  position: 'bottom',
                },
              ],
            },
          }}
        />
      </GraphCard>
    </StrategyHeaderWrapper>
  );
};

export default StrategyHeader;
