import React, { PureComponent } from 'react';
import { Table } from 'antd';
import { ExpandIconProps, TableProps } from 'antd/lib/table';
import Icon from 'antd/es/icon';

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

class GeneralTable extends PureComponent<TableProps<any>> {
  public render() {
    return <Table expandIcon={CustomExpandIcon} {...this.props} />;
  }
}

export default GeneralTable;
