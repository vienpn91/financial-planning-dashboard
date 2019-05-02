import React, { PureComponent } from 'react';
import { Icon, Popconfirm, Table } from 'antd';
import { TableEntryContainer, HeaderTitleTable, TextTitle } from '../styled';
import ExpandedLiabilitiesRow from './ExpandedInsuranceRow';
import ExpandedInsuranceRow from "./ExpandedInsuranceRow";

class InsuranceTable extends PureComponent {
  protected static defaultProps = {
    expanded: true,
  };
  public state = {
    dataSource: [
      {
        key: '0',
        description: 'Home Loan',
        type: 'None-Deducti...',
        owner: 'Client',
        value: 2512000,
        investment: 'Primary Reside',
        from: 'Existing',
        to: 'Retain',
        expandable: {
          riskProfile: 'defensive',
        },
      },
    ],
    count: 1,
  };

  public columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      width: 140,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: '1',
      width: 150,
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: '2',
      width: 120,
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: '3',
      width: 150,
    },
    {
      title: 'Investment',
      dataIndex: 'investment',
      key: '4',
      width: 160,
    },
    {
      title: 'From',
      dataIndex: 'from',
      key: '5',
      width: 120,
    },
    {
      title: 'To',
      dataIndex: 'to',
      key: '6',
      width: 120,
    },
    {
      title: 'Action',
      key: 'operation',
      // fixed: 'right',
      width: 100,
      render: (text: any, record: any) =>
        this.state.dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
            <a href="javascript:">Delete</a>
          </Popconfirm>
        ) : null,
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
      description: '',
      type: '',
      owner: '',
      value: 0,
      indexation: '',
      from: '',
      to: '',
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
      <TableEntryContainer>
        <HeaderTitleTable>
          <Icon type={'plus-square'} theme={'filled'} onClick={this.handleAdd} />
          <TextTitle>{'Insurance'}</TextTitle>
        </HeaderTitleTable>
        <Table
          loading={false}
          columns={columns}
          dataSource={dataSource}
          expandedRowRender={ExpandedInsuranceRow}
          pagination={false}
        />
      </TableEntryContainer>
    );
  }
}

export default InsuranceTable;
