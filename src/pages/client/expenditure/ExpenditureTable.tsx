import React, { PureComponent } from 'react';
import { Icon, Popconfirm } from 'antd';
import { HeaderTitleTable, TableEntryContainer, TextTitle } from '../styled';
import GeneralTable from '../GeneralTable';

class ExpenditureTable extends PureComponent {
  public state = {
    dataSource: [
      {
        key: '0',
        description: 'Living Expenses',
        type: 'employment',
        owner: 'Client',
        value: 1000,
        indexation: 'inflationCPI',
        from: 'start',
        to: 'end',
      },
    ],
    count: 1,
  };

  public columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      width: 140,
      // fixed: 'left',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: '1',
      width: 120,
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
      width: 120,
    },
    {
      title: 'Indexation',
      dataIndex: 'indexation',
      key: '4',
      width: 120,
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
      key: `${count}`,
      description: '',
      type: '',
      owner: '',
      value: 0,
      indexation: '',
      from: '',
      to: '',
    };
    dataSource.unshift(newData);
    this.setState({
      dataSource,
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
          editable: 'true',
          title: col.title,
        }),
      };
    });

    return (
      <TableEntryContainer>
        <HeaderTitleTable>
          <Icon type={'plus-square'} theme={'filled'} onClick={this.handleAdd} />
          <TextTitle>{'Expenditure'}</TextTitle>
        </HeaderTitleTable>
        <GeneralTable columns={columns} dataSource={dataSource} pagination={false} />
      </TableEntryContainer>
    );
  }
}

export default ExpenditureTable;
