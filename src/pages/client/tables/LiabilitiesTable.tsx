import React, { PureComponent } from 'react';
import { Icon, Popconfirm, Table } from 'antd';
import ExpandedAssetsRow from '../ExpandedAssetsRow';
import { TableEntryContainer, HeaderTitleTable, TextTitle } from '../styled';

class LiabilitiesTable extends PureComponent {
  protected static defaultProps = {
    expanded: true,
  };
  public state = {
    dataSource: [
      {
        key: '0',
        description: 'Home',
        type: 'Lifestyle',
        owner: 'Client',
        value: 2512000,
        investment: 'Primary Reside',
        from: 'Existing',
        to: 'Retain',
        render: <a href="javascript:;">{'123 google'}</a>,
        expandable: {
          riskProfile: 'defensive',
        },
      },
      {
        key: '1',
        description: 'Shares',
        type: 'Direct Invest',
        owner: 'Client',
        value: 1000000,
        investment: 'Australian Equity',
        from: 'Existing',
        to: 'Retain',
        expandable: {
          riskProfile: 'defensive',
          hasPrivateHealthInsurance: true,
          lookingForCoupleAdvice: false,
        },
      },
      {
        key: '2',
        description: 'Home',
        type: 'Lifestyle',
        owner: 'Client',
        value: 25000,
        investment: 'Primary Reside',
        from: 'Existing',
        to: 'Retain',
        expandable: {
          riskProfile: 'defensive',
          hasPrivateHealthInsurance: true,
          lookingForCoupleAdvice: false,
        },
      },
      {
        key: '3',
        description: 'Home',
        type: 'Lifestyle',
        owner: 'Client',
        value: 25000,
        investment: 'Primary Reside',
        from: 'Existing',
        to: 'Retain',
        expandable: {
          riskProfile: 'defensive',
          hasPrivateHealthInsurance: true,
          lookingForCoupleAdvice: false,
        },
      },
    ],
    count: 2,
  };

  public columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      width: 140,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: '1',
      width: 150,
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
      width: 150,
    },
    {
      title: 'Investment',
      dataIndex: 'investment',
      key: '4',
      width: 160,
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
  ];

  public render() {
    const { dataSource } = this.state;
    const columns = this.columns.map((col) => {
      return {
        ...col,
        fixed: false,
        onCell: (record: any) => ({
          record,
          editable: true,
          dataIndex: col.dataIndex,
          title: col.title,
        }),
      };
    });

    return (
      <TableEntryContainer>
        <HeaderTitleTable>
          <Icon type={'plus-square'} theme={'filled'}/>
          <TextTitle>{'Assets'}</TextTitle>
        </HeaderTitleTable>
        <Table
          loading= {false}
          columns={columns}
          dataSource={dataSource}
          expandedRowRender={ExpandedAssetsRow}
          pagination={false}
        />
      </TableEntryContainer>
    );
  }
}

export default LiabilitiesTable;
