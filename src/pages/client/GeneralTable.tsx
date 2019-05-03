import React, { PureComponent } from 'react';
import { Table } from 'antd';
import { ExpandIconProps, TableProps } from 'antd/lib/table';
import Icon from 'antd/es/icon';
import { TweenOneGroup } from 'rc-tween-one';
import { isFunction } from 'lodash';
import EditableCell, { EditableFormRow } from './assets/EditableCell';

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
  getHandlers?: (arg: any) => void;
}

class GeneralTable extends PureComponent<GeneralTableProps & TableProps<any>> {
  protected static defaultProps = {
    className: 'table-enter-leave',
  };

  public state = {
    dataSource: this.props.dataSource,
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
    this.setState({
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

  public handleSave = (row: any) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((data) => row.key === data.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  }

  public render() {
    const columns = this.props.columns.map((col: any) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: any) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <Table
        className={this.props.className}
        expandIcon={CustomExpandIcon}
        rowClassName={() => 'editable-row'}
        components={{ body: { wrapper: this.animTag, row: EditableFormRow, cell: EditableCell } }}
        {...this.props}
        columns={columns}
        onChange={this.pageChange}
      />
    );
  }
}

export default GeneralTable;
