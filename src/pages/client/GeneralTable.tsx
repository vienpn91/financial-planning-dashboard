import React, { PureComponent } from 'react';
import { Popconfirm, Table } from 'antd';
import { ExpandIconProps, TableProps } from 'antd/lib/table';
import Icon from 'antd/es/icon';
import { TweenOneGroup } from 'rc-tween-one';
import { isFunction } from 'lodash';
import EditableCell from './assets/EditableCell';

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

  public pageChange = () => {
    this.setState({
      isPageTween: true,
    });
  }

  public handleDelete = (key: number, record: any) => {
    const { handleDelete, } = this.props;
    if (isFunction(handleDelete)) {
      handleDelete(key, record);
    }

    // if (formProps && tableName) {
    //   const { setFieldValue, values } = formProps;
    //   if (values && values[tableName]) {
    //     values[tableName].splice(key, 1);
    //     setFieldValue(tableName, values);
    //   }
    // }
  }

  public handleSave = (arg: { tableName: string; rowIndex: number; dataIndex: number; value: any; record: any }) => {
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
    const { columns: propColumns, dataSource, tableName, ...props } = this.props;
    const columns = propColumns.map((col: any) => {
      if (col.key === 'operation') {
        return {
          ...col,
          title: 'Action',
          key: 'operation',
          width: 100,
          render: (text: any, record: any) => (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key, record)}>
              <a href="javascript:">Delete</a>
            </Popconfirm>
          ),
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
        expandIcon={CustomExpandIcon}
        rowClassName={() => 'editable-row'}
        components={components}
        {...props}
        columns={columns}
        dataSource={dataSource}
        onChange={this.pageChange}
        className={`table-general ` + this.props.className}
      />
    );
  }
}

export default GeneralTable;
