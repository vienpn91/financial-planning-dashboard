import React, { PureComponent } from 'react';
import { Icon, Popconfirm } from 'antd';
import { HeaderTitleTable, TableEntryContainer, TextTitle } from '../styled';
import GeneralTable from '../GeneralTable';
import { FormikProps } from 'formik';

interface IncomeTableProps {
  formProps: FormikProps<any>;
  tableName?: string;
}

class IncomeTable extends PureComponent<IncomeTableProps> {
  protected static defaultProps = { tableName: 'income' };

  public handlers = {
    onAdd: () => {},
    onDelete: () => {},
  };

  public dataSource = [
    {
      // you have to count from 0
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
  ];

  public columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      width: 140,
      type: 'text',
      key: '0',
      editable: false,
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
      width: 100,
    },
  ];

  public handleAdd = () => {
    this.handlers.onAdd();
  }

  public render() {
    const { tableName, formProps } = this.props;
    const columns = this.columns.map((col) => {
      return {
        ...col,
        editable: col.editable === false ? false : col.key !== 'operation' && 'true',
        fixed: false,
      };
    });
    const newData = {
      description: '',
      type: '',
      owner: '',
      value: 0,
      indexation: '',
      from: '',
      to: '',
    };

    return (
      <TableEntryContainer>
        <HeaderTitleTable>
          <Icon type={'plus-square'} theme={'filled'} onClick={this.handleAdd} />
          <TextTitle>{'Income'}</TextTitle>
        </HeaderTitleTable>
        <GeneralTable
          getHandlers={(handlers: any) => (this.handlers = handlers)}
          columns={columns}
          dataSource={this.dataSource}
          pagination={false}
          tableName={tableName}
          newRowData={newData}
          formProps={formProps}
        />
      </TableEntryContainer>
    );
  }
}

export default IncomeTable;
