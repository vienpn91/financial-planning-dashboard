import React from 'react';

export interface Statistic {
  total: number;
  isIncrease: boolean;
  differenceNumber: number;
  subValue?: number;
}

interface StatisticItemProps {
  title: string;
  subTitle?: string;
}

const StatisticItem = (props: StatisticItemProps & Statistic) => {
  const { title, total, isIncrease, differenceNumber, subTitle, subValue } = props;
  return (
    <div>
      <div>{title}:</div>
      <div>$ {total}</div>
      <div>
        {isIncrease ? '^' : 'v'} ${differenceNumber}
      </div>
      {subTitle && subValue && (
        <>
          <div>{subTitle}:</div>
          <div>(age {subValue})</div>
        </>
      )}
    </div>
  );
};

export default StatisticItem;
