import React, { PureComponent } from 'react';
import { Icon, Popconfirm } from 'antd';
import ExpandedAssetsRow from './ExpandedAssetsRow';
import { TableEntryContainer, HeaderTitleTable, TextTitle } from '../styled';
import GeneralTable from '../GeneralTable';
import { FormikProps } from 'formik';
import { map, get } from 'lodash';

const addKeyToArray = (array: object[]) => map(array, (d, index: number) => ({ key: index, ...d }));

interface AssetsTableProps {
  data: object[];
  loading?: boolean;

  formProps?: FormikProps<any>;
  tableName?: string;
  setFieldValue?: (field: string, value: any) => void;
}

interface AssetsTableState {
  dataSource: object[];
  count: number;
}

class AssetsTable extends PureComponent<AssetsTableProps, AssetsTableState> {
  public state = {
    dataSource: addKeyToArray(this.props.data),
    count: this.props.data.length,
  };

  public columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      width: '13%',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: '1',
      width: '12%',
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: '2',
      width: '13%',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: '3',
      width: '13%',
    },
    {
      title: 'Investment',
      dataIndex: 'investment',
      key: '4',
      width: '13%',
    },
    {
      title: 'From',
      dataIndex: 'from',
      key: '5',
      width: '13%',
    },
    {
      title: 'To',
      dataIndex: 'to',
      key: '6',
      width: '13%',
    },
    {
      title: 'Action',
      key: 'operation',
    },
  ];

  public componentDidUpdate(prevProps: Readonly<AssetsTableProps>, prevState: Readonly<{}>, snapshot?: any): void {
    if (this.props.loading !== prevProps.loading) {
      this.setState({
        dataSource: addKeyToArray(this.props.data),
        count: this.props.data.length,
      });
    }
  }

  public handleDelete = (key: number, record: any) => {
    console.log('delete', { key, record });
    // const dataSource = [...this.state.dataSource];
    // this.setState({ dataSource: dataSource.filter((item) => item.key !== key) });
  }

  public handleAdd = () => {
    console.log('handle add');
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      description: 'Home',
      type: 'lifestyle',
      owner: 'Client',
      value: 25000,
      investment: 'primaryResidence',
      from: 'existing',
      to: 'retain',
      expandable: {
        costBase: 50000,
        growthRate: 12,
      },
    };
    dataSource.unshift(newData);
    this.setState({
      dataSource,
      count: count + 1,
    });
  }

  public render() {
    const { dataSource } = this.state;
    const { loading } = this.props;
    const columns = this.columns.map((col) => {
      return {
        ...col,
        fixed: false,
        onCell: (record: any) => ({
          record,
          editable: col.key !== 'operation' && 'true',
          title: col.title,
        }),
      };
    });

    return (
      <TableEntryContainer>
        <HeaderTitleTable>
          <Icon type={'plus-square'} theme={'filled'} onClick={this.handleAdd} />
          <TextTitle>{'Assets'}</TextTitle>
        </HeaderTitleTable>
        <GeneralTable
          loading={loading || false}
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          expandedRowRender={ExpandedAssetsRow}
          handleDelete={this.handleDelete}
          handleAdd={this.handleAdd}
        />
      </TableEntryContainer>
    );
  }
}

export default AssetsTable;
