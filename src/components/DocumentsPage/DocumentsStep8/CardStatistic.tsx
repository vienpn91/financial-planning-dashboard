import React from 'react';
import { filter, get } from 'lodash';

import { Record } from '../DocumentsPage';
import { CardThumbnailItem, StatusCard, TitleCard, NumberCard, DoneCard, CardThumbnailChecked } from './styled';
import { Icon } from 'antd';

const CardStatistic = (props: { record: Record; onClick: () => void }) => {
  const { record, onClick } = props;
  const numberIssues = filter(record.table.data, (d) => d.id !== -1 && !d.isOverwrite).length;
  const checked = get(record, 'table.data.length') === 0 || numberIssues === 0;

  if (checked) {
    return (
      <CardThumbnailChecked onClick={onClick}>
        <TitleCard>{record.header}</TitleCard>
        <DoneCard>
          <Icon type="check" />
        </DoneCard>
      </CardThumbnailChecked>
    );
  }

  return (
    <CardThumbnailItem onClick={onClick}>
      <TitleCard>{record.header}</TitleCard>
      <NumberCard>{numberIssues}</NumberCard>
      <StatusCard>Open issue{numberIssues > 1 && 's'}</StatusCard>
    </CardThumbnailItem>
  );
};

export default CardStatistic;
