import React, { useState, useEffect } from 'react';
import { filter, get } from 'lodash';

import { Record } from '../DocumentsPage';
import { CardThumbnailItem, StatusCard, TitleCard, NumberCard, DoneCard, CardThumbnailChecked } from './styled';
import { Icon, Skeleton } from 'antd';

const CardStatistic = (props: { record: Record; onClick: () => void }) => {
  const { record, onClick } = props;
  const [isLoading, setIsLoading] = useState(true);
  const numberIssues = filter(record.table.data, (d) => d.id !== -1 && !d.isOverwrite).length;
  const checked = get(record, 'table.data.length') === 0 || numberIssues === 0;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (isLoading) {
    return (
      <CardThumbnailItem>
        <Skeleton />
      </CardThumbnailItem>
    );
  }

  if (checked) {
    return (
      <CardThumbnailChecked onClick={onClick}>
        <div className="fadeIn">
          <TitleCard>{record.header}</TitleCard>
          <DoneCard>
            <Icon type="check" />
          </DoneCard>
        </div>
      </CardThumbnailChecked>
    );
  }

  return (
    <CardThumbnailItem onClick={onClick}>
       <div className="fadeIn">
        <TitleCard>{record.header}</TitleCard>
        <NumberCard>{numberIssues}</NumberCard>
        <StatusCard>Open issue{numberIssues > 1 && 's'}</StatusCard>
      </div>
    </CardThumbnailItem>
  );
};

export default CardStatistic;
