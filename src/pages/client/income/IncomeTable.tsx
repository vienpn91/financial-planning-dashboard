import React, { PureComponent } from 'react';
import { Icon, Popconfirm } from 'antd';
import { HeaderTitleTable, TableEntryContainer, TextTitle } from '../styled';
import GeneralTable from '../GeneralTable';
import { FormikProps } from 'formik';

interface IncomeTableProps {
  formProps?: FormikProps<any>;
  tableName?: string;
  data: object[];
  setFieldValue?: (field: string, value: any) => void;
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
      type: 'text',
      key: '0',
      editable: false,
      width: '13%',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: '1',
      width: '12%',
      type: 'select',
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: '2',
      width: '13%',
      type: 'select',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: '3',
      width: '13%',
      type: 'text',
    },
    {
      title: 'Indexation',
      dataIndex: 'indexation',
      key: '4',
      width: '13%',
      type: 'select',
    },
    {
      title: 'From',
      dataIndex: 'from',
      key: '5',
      width: '13%',
      type: 'date',
    },
    {
      title: 'To',
      dataIndex: 'to',
      key: '6',
      width: '13%',
      type: 'date',
    },
    {
      title: 'Action',
      key: 'operation',
      width: '10%',
    },
  ];

  public handleAdd = () => {
    this.handlers.onAdd();
  }

  public handleDelete = (key: number, record: any) => {
    const { setFieldValue, tableName } = this.props;
    console.log('delete', { key, record });

    if (setFieldValue && tableName) {
      debugger;
      // if (values && values[tableName]) {
      //   values[tableName].splice(key, 1);
      //   setFieldValue(tableName, values);
      // }
    }
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
          columns={columns}
          dataSource={this.dataSource}
          pagination={false}
        />
      </TableEntryContainer>
    );
  }
}

export default IncomeTable;
