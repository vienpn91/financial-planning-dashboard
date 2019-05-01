import React, { PureComponent } from 'react';
import { Icon, Popconfirm, Table } from 'antd';
import { ContributionTableContainer } from '../styled';

class ContributionWidhdrawalsTable extends PureComponent {
  public state = {
    dataSource: [
      {
        key: '0',
        type: 'Custom',
        value: 25000,
        from: 'start',
        to: 'End',
      },
      {
        key: '1',
        type: 'Custom',
        value: 10000,
        from: 'start',
        to: 'End',
      },
      {
        key: '2',
        type: 'Custom',
        value: 25000,
        from: 'start',
        to: 'End',
      },
      {
        key: '3',
        type: 'Custom',
        value: 15000,
        from: 'start',
        to: 'End',
      },
    ],
    count: 4,
  };

  public columns = [
    {
      title: 'Action',
      key: 'operation',
      fixed: 'left',
      width: 100,
      render: (text: any, record: any) =>
        this.state.dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
            <a href="javascript:">Delete</a>
          </Popconfirm>
        ) : null,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      width: 140,
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: '1',
      width: 120,
    },
    {
      title: 'From',
      dataIndex: 'from',
      key: '2',
      width: 120,
    },
    {
      title: 'To',
      dataIndex: 'to',
      key: '3',
      width: 120,
    },
  ];

  public handleDelete = (key: string) => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter((item) => item.key !== key) });
  }

  public handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      type: 'Custom',
      value: 0,
      from: 'Start',
      to: 'End',
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }

  public render() {
    const { dataSource } = this.state;
    const columns = this.columns.map((col) => {
      return {
        ...col,
        fixed: col.fixed || false,
        onCell: (record: any) => ({
          record,
          editable: true,
          dataIndex: col.dataIndex,
          title: col.title,
        }),
      };
    });

    return (
      <ContributionTableContainer>
        <div>
          <Icon type={'plus-square'} theme={'filled'} onClick={this.handleAdd} />
          {'Contribution/Widhdrawals'}
        </div>
        <Table
          // @ts-ignore
          columns={columns}
          scroll={{ x: 950, y: 320 }}
          dataSource={dataSource}
          pagination={false}
        />
      </ContributionTableContainer>
    );
  }
}

export default ContributionWidhdrawalsTable;