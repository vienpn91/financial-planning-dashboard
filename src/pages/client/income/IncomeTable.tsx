import React, { PureComponent } from 'react';
import { Icon, Popconfirm } from 'antd';
import { HeaderTitleTable, TableEntryContainer, TextTitle } from '../styled';
import GeneralTable from '../GeneralTable';

class IncomeTable extends PureComponent {
  public handlers = {
    onAdd: () => {},
    onDelete: () => {},
  };
  public state = {
    dataSource: [
      {
        key: '0',
        description: 'Salary',
        type: 'employment',
        owner: 'Client',
        value: 1000,
        indexation: 'salaryInflation',
        from: 'start',
        to: 'clientRetirement',
      },
      {
        key: '1',
        description: 'Rental',
        type: 'taxable',
        owner: 'Partner',
        value: 1000,
        indexation: 'inflationCPI',
        from: 'start',
        to: 'end',
      },
    ],
    count: 2,
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
    this.handlers.onDelete();
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
    this.handlers.onAdd();
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
          <Icon type={'plus-square'} theme={'filled'} onClick={this.handleAdd}/>
          <TextTitle>{'Income'}</TextTitle>
        </HeaderTitleTable>
        <GeneralTable
          getHandlers={(handlers: any) => (this.handlers = handlers)}
          columns={columns}
          dataSource={dataSource}
          pagination={false}
        />
      </TableEntryContainer>
    );
  }
}

export default IncomeTable;
