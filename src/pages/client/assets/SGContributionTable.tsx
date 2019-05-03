import React, { PureComponent } from 'react';
import { Icon, Popconfirm, Table } from 'antd';
import { InnerTableContainer, HeaderTitleTable, TextTitle, DivideLine } from '../styled';

class SGContributionTable extends PureComponent {
  public state = {
    dataSource: [
      {
        key: '0',
        superSalary: '5,000.00',
        increaseToLimit: 'No',
        rate: '3.0%',
      },
    ],
    count: 1,
  };

  public columns = [
    {
      title: 'Super Salary',
      dataIndex: 'superSalary',
      width: 140,
    },
    {
      title: 'Increase to limit?',
      dataIndex: 'increaseToLimit',
      key: '1',
      width: 120,
    },
    {
      title: 'SG Rate (%)',
      dataIndex: 'rate',
      key: '2',
      width: 120,
    },
  ];

  public render() {
    const { dataSource } = this.state;
    const columns = this.columns.map((col) => {
      return {
        ...col,
        fixed: false,
        onCell: (record: any) => ({
          record,
          editable: 'true',
          title: col.title,
        }),
      };
    });

    return (
      <InnerTableContainer>
        <HeaderTitleTable small={true}>
          <TextTitle small={true}>{'SG Contribution'}</TextTitle>
          <DivideLine />
        </HeaderTitleTable>
        <Table columns={columns} dataSource={dataSource} pagination={false} size={'small'} />
      </InnerTableContainer>
    );
  }
}

export default SGContributionTable;
