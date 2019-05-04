import React, { PureComponent } from 'react';
import { Popconfirm, Table } from 'antd';
import { ExpandIconProps, TableProps } from 'antd/lib/table';
import Icon from 'antd/es/icon';
import { TweenOneGroup } from 'rc-tween-one';
import { isFunction } from 'lodash';
import EditableCell from './assets/EditableCell';
import { FormikProps } from 'formik';

function CustomExpandIcon(props: ExpandIconProps<any>) {
  if (!props.expandable) {
    return null;
  }
  let text;
  if (props.expanded) {
    text = 'down';
  } else {
    text = 'right';
  }
  return (
    <Icon
      type={text}
      // @ts-ignore
      onClick={(e) => props.onExpand(props.record, e)}
    />
  );
}

interface GeneralTableProps {
  columns: any;
  dataSource: object[];
  newRowData?: object;
  tableName?: string;
  getHandlers?: (arg: any) => void;
  formProps?: FormikProps<any>;
}

class GeneralTable extends PureComponent<GeneralTableProps & TableProps<any>> {
  protected static defaultProps = {
    className: 'table-enter-leave',
  };

  public state = {
    dataSource: this.props.dataSource,
    count: this.props.dataSource.length,
  };

  public enterAnim = [
    {
      opacity: 0,
      x: 30,
      duration: 0,
      backgroundColor: '#fffeee',
    },
    {
      duration: 200,
      type: 'from',
      delay: 250,
      ease: 'easeOutQuad',
    },
    {
      opacity: 1,
      x: 0,
      duration: 250,
      ease: 'easeOutQuad',
    },
    { delay: 1000, backgroundColor: 'initial' },
  ];
  public leaveAnim = [{ duration: 250, opacity: 0 }, { duration: 200, ease: 'easeOutQuad' }];

  public componentDidMount() {
    const { getHandlers } = this.props;
    if (isFunction(getHandlers)) {
      getHandlers({ onAdd: this.onAdd, onDelete: this.onDelete });
    }
  }

  public animTag = ($props: any) => {
    return (
      <TweenOneGroup
        component="tbody"
        enter={this.enterAnim}
        leave={this.leaveAnim}
        appear={false}
        exclusive
        {...$props}
      />
    );
  }

  public onAdd = () => {
    const { count, dataSource } = this.state;
    const { newRowData } = this.props;
    const newData = {
      ...newRowData,
      key: `${count}`,
    };
    dataSource.push(newData);
    this.setState({
      dataSource,
      count: count + 1,
      isPageTween: false,
    });
  }

  public onDelete = () => {
    this.setState({ isPageTween: false });
  }

  public pageChange = () => {
    this.setState({
      isPageTween: true,
    });
  }

  public handleDelete = (key: string) => {
    const { formProps, tableName } = this.props;
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter((item) => item.key !== key) });

    if (formProps && tableName) {
      const { setFieldValue, values } = formProps;
      if (values && values[tableName]) {
        values[tableName].splice(key, 1);
        setFieldValue(tableName, values);
      }
    }
  }

  public handleSave = (arg: { tableName: string; rowIndex: string; dataIndex: number; value: any; record: any }) => {
    const { tableName, rowIndex, dataIndex, value, record } = arg;
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((data) => record.key === data.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      [dataIndex]: value,
    });
    this.setState({ dataSource: newData });
  }

  public render() {
    const { dataSource } = this.state;
    const { columns: propColumns, dataSource: propDataSource, tableName, ...props } = this.props;
    const columns = propColumns.map((col: any) => {
      if (col.key === 'operation') {
        return {
          ...col,
          title: 'Action',
          key: 'operation',
          width: 100,
          render: (text: any, record: any) =>
            this.state.dataSource.length >= 1 ? (
              <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                <a href="javascript:">Delete</a>
              </Popconfirm>
            ) : null,
        };
      }
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record: any, rowIndex: number) => ({
          rowIndex,
          tableName,
          type: col.type || 'text',
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    const components = { body: { wrapper: this.animTag, cell: EditableCell } };

    return (
      <Table
        className={this.props.className}
        expandIcon={CustomExpandIcon}
        rowClassName={() => 'editable-row'}
        components={components}
        {...props}
        columns={columns}
        dataSource={dataSource}
        onChange={this.pageChange}
      />
    );
  }
}

export default GeneralTable;
