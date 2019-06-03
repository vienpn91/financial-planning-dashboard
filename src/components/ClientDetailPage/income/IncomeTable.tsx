import React, { PureComponent } from 'react';
import { Button, Icon, Popconfirm } from 'antd';
import { ActionTableGeneral, HeaderTitleTable, TableEntryContainer, TextTitle } from '../../../pages/client/styled';
import { isFunction } from 'lodash';
import GeneralTable from '../GeneralTable';
import { FormikProps } from 'formik';
import {
  maritalStateOptions,
  ownerOptions,
  incomeTypeOptions,
  from1Options,
  to1Options,
  indexationOptions,
} from '../../../enums/options';
import { loadOptionsBaseOnCol } from '../../../utils/columnUtils';

interface IncomeTableProps {
  data: object[];
  maritalState: string;
  dynamicCustomValue: object;
  loading?: boolean;

  formProps?: FormikProps<any>;
  tableName?: string;
  setFieldValue: (field: string, value: any) => void;
  resetForm: (nextValues?: any) => void;
  submitForm: () => void;
  addRow: (row: any) => void;
  deleteRow: (key: number) => void;
}

class IncomeTable extends PureComponent<IncomeTableProps> {
  public columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      type: 'text',
      key: '0',
      width: 'calc(18% - 20px)',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: '1',
      width: 'calc(16% - 20px)',
      type: 'select',
      options: incomeTypeOptions,
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: '2',
      width: '11%',
      type: 'select',
      options: ownerOptions,
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: '3',
      width: '13%',
      type: 'number',
    },
    {
      title: 'Indexation',
      dataIndex: 'indexation',
      key: '4',
      width: '15%',
      type: 'select',
      options: indexationOptions,
    },
    {
      title: 'From',
      dataIndex: 'from',
      key: '5',
      type: 'date',
      width: '10%',
      pickerType: 'custom',
      options: from1Options,
    },
    {
      title: 'To',
      dataIndex: 'to',
      key: '6',
      width: '10%',
      type: 'date',
      pickerType: 'custom',
      options: to1Options,
    },
    {
      title: 'Action',
      key: 'operation',
      editable: false,
      width: '7%',
    },
  ];

  private tableName = 'income';

  public componentDidUpdate(prevProps: Readonly<IncomeTableProps>, prevState: Readonly<{}>, snapshot?: any): void {
    const { maritalState, setFieldValue, data } = this.props;
    if (prevProps.maritalState !== maritalState && maritalState === maritalStateOptions[1].value) {
      // update All Owner to Client
      const newData = data.map((d) => ({ ...d, owner: 'client' }));
      setFieldValue(this.tableName, newData);
    }
  }

  public resetForm = () => {
    this.handleResetForm();
  }

  public submitForm = () => {
    const { submitForm } = this.props;
    submitForm();
  }

  public handleDelete = (key: number) => {
    const { deleteRow } = this.props;

    // update formik
    if (isFunction(deleteRow)) {
      deleteRow(key);
    }
  }

  public handleAdd = () => {
    const { addRow } = this.props;
    const newData = {
      key: Date.now(),
      description: 'Salary',
      type: 'employment',
      owner: 'client',
      value: 1000,
      indexation: 'salaryInflation',
      from: {
        type: 'start',
        yearValue: null,
      },
      to: {
        type: 'clientRetirement',
        yearValue: null,
      },
    };

    // update formik
    if (isFunction(addRow)) {
      addRow(newData);
    }
  }

  public handleSave = (arg: { tableName: string; rowIndex: number; dataIndex: string; value: any; record: any }) => {
    const { tableName, rowIndex, dataIndex, value, record } = arg;
  }

  public handleResetForm = () => {
    const { resetForm } = this.props;
    if (isFunction(resetForm)) {
      resetForm();
    }
  }

  public render() {
    const { loading, data, maritalState, dynamicCustomValue } = this.props;
    const columns = this.columns.map((col: any) => {
      const editable = col.editable === false ? false : 'true';
      if (col.key === 'operation') {
        return {
          ...col,
          title: 'Action',
          key: 'operation',
          width: '7%',
          render: (text: any, record: any) => (
            <Popconfirm title="Really delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a href="javascript:">Delete</a>
            </Popconfirm>
          ),
        };
      }

      return {
        ...col,
        onCell: (record: any, rowIndex: number) => {
          const options = loadOptionsBaseOnCol(col, record, { maritalState, dynamicCustomValue });

          return {
            ...col,
            options,
            rowIndex,
            tableName: this.tableName,
            type: col.type || 'text',
            record,
            editable,
            handleSave: this.handleSave,
          };
        },
      };
    });

    return (
      <TableEntryContainer>
        <HeaderTitleTable>
          <Icon type={'plus-square'} theme={'filled'} onClick={this.handleAdd} />
          <TextTitle>{'Income'}</TextTitle>
        </HeaderTitleTable>
        <GeneralTable
          loading={loading || false}
          columns={columns}
          dataSource={data}
          pagination={false}
          className={`${this.tableName}-table`}
        />
        <ActionTableGeneral>
          <Button htmlType={'button'} type={'default'} onClick={this.handleResetForm}>
            <Icon type="close" />
            <span>Discard</span>
          </Button>
          <Button htmlType={'submit'} type={'primary'}>
            <Icon type="check" />
            <span>Submit</span>
          </Button>
        </ActionTableGeneral>
      </TableEntryContainer>
    );
  }
}

export default IncomeTable;
