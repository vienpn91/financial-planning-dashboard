import React from 'react';
import { Carousel, Table } from 'antd';
import cn from 'classnames';

export interface DocumentsCarouselProps {
  effect?: string;
  dotPosition?: string;
}
import {
  CarouselItem,
  CarouselWrapper,
} from './styled';
class DocumentsCarousel extends React.PureComponent<DocumentsCarouselProps> {
  public dataSource = [
    {
      key: '1',
      insurance: 'Insurance Nominations',
      reason: 'You have informed us that your estate planning arrangements are in place and you do not require it to be re-addressed',
    },
    {
      key: '2',
      insurance: 'Sample text',
      reason: 'Unspecified',
    },
    {
      key: '3',
      insurance: 'POA / EPOA',
      reason: 'Unspecified',
    },
    {
      key: '4',
      insurance: 'Guardianship',
      reason: 'Unspecified',
    },
    {
      key: '5',
      insurance: 'Enter Description',
      reason: '-',
    },
  ];
  public columns = [
    {
      title: 'Insurance',
      dataIndex: 'insurance',
      key: 'insurance',
    },
    {
      title: 'Reason for being scoped out',
      dataIndex: 'reason',
      key: 'reason',
    },
  ];
  public render(): JSX.Element {
    return (
      <CarouselWrapper>
        <Carousel effect="fade" dotPosition={'left'}>
          <CarouselItem>
            <Table
              className={cn('table-general documents-table')}
              columns={this.columns}
              dataSource={this.dataSource}
              pagination={false}
            />
          </CarouselItem>
          <CarouselItem>
            <Table
              className={`table-general documents-table`}
              columns={this.columns}
              dataSource={this.dataSource}
              pagination={false}
            />

          </CarouselItem>
          <CarouselItem>
            <Table
              className={`table-general documents-table`}
              columns={this.columns}
              dataSource={this.dataSource}
              pagination={false}
            />
          </CarouselItem>
          <CarouselItem>
            <Table
              className={cn('table-general documents-table`')}
              columns={this.columns}
              dataSource={this.dataSource}
              pagination={false}
            />

          </CarouselItem>
        </Carousel>
      </CarouselWrapper>
    );
  }
}

export default DocumentsCarousel;
