import React, { PureComponent } from 'react';
import { Table } from 'antd';
import { ExpandIconProps, TableProps } from 'antd/lib/table';
import Icon from 'antd/es/icon';
import { TweenOneGroup } from 'rc-tween-one';
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

  public enterAnim = [
    {
      opacity: 0, x: 30, backgroundColor: '#fffeee', duration: 0,
    },
    {
      height: 0,
      duration: 200,
      type: 'from',
      delay: 250,
      ease: 'easeOutQuad',
    },
    {
      opacity: 1, x: 0, duration: 250, ease: 'easeOutQuad',
    },
    { delay: 1000, backgroundColor: '#fff' },
  ];
  public leaveAnim = [
    { duration: 250, opacity: 0 },
    { height: 0, duration: 200, ease: 'easeOutQuad' },
    { delay: 100, display: 'none', backgroundColor: '#fff'},
  ];

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

  public render() {
    const { columns, dataSource, ...props } = this.props;
    const components = { body: { wrapper: this.animTag, cell: EditableCell } };
    return (
      <Table
        {...props}
        expandIcon={CustomExpandIcon}
        rowClassName={() => 'editable-row'}
        components={components}
        columns={columns}
        dataSource={dataSource}
        onChange={this.pageChange}
        className={`table-general ` + this.props.className}
      />
    );
  }
}

export default GeneralTable;
