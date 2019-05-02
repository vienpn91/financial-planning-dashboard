import React, { PureComponent } from 'react';
import { Icon, Popconfirm, Table } from 'antd';
import { ContributionTableContainer, HeaderTitleTable, TextTitle } from '../styled';

class PremiumFeeDetailsTable extends PureComponent {
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
        fixed: false,
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
        <HeaderTitleTable small={true}>
          <Icon type={'plus-square'} theme={'filled'} onClick={this.handleAdd} />
          <TextTitle small={true}>{'Premium & Fee Details'}</TextTitle>
        </HeaderTitleTable>
        <Table columns={columns} scroll={{ x: 950, y: 320 }} dataSource={dataSource} pagination={false} />
      </ContributionTableContainer>
    );
  }
}

export default PremiumFeeDetailsTable;
