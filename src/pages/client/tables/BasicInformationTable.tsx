import React, { PureComponent } from 'react';
import { Icon, Table } from 'antd';
import ExpandedBasicInformationRow from '../ExpandedBasicInformationRow';
import {HeaderTitleTable, TableEntryContainer, TextTitle} from '../styled';

class BasicInformationTable extends PureComponent {
  protected static defaultProps = {
    expanded: true,
  };
  public state = {
    dataSource: [
      {
        key: '0',
        description: 'Client',
        firstName: 'Jack',
        lastName: 'Rayan',
        dob: 1555924936,
        empStatus: 'selfEmployed',
        retirementYear: 1555924936,
        maritalState: 'married',
        expandable: {
          riskProfile: 'defensive',
          hasPrivateHealthInsurance: true,
          lookingForCoupleAdvice: false,
        },
      },
      {
        key: '1',
        description: 'Partner',
        firstName: 'Susane',
        lastName: 'Diaz',
        dob: 1555924936,
        empStatus: 'unemployed',
        retirementYear: '',
        maritalState: 'married',
        expandable: {
          riskProfile: 'highGrowth',
          hasPrivateHealthInsurance: false,
          jointRiskProfile: 'defensive',
        },
      },
    ],
    count: 2,
  };

  public columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      width: 130,
      // fixed: 'left',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: '1',
      width: 120,
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: '2',
      width: 120,
    },
    {
      title: 'DOB',
      dataIndex: 'dob',
      key: '3',
      width: 120,
    },
    {
      title: 'Emp Status',
      dataIndex: 'empStatus',
      key: '4',
      width: 120,
    },
    {
      title: 'Retirement Year',
      dataIndex: 'retirementYear',
      key: '5',
      width: 150,
    },
    {
      title: 'Marital State',
      dataIndex: 'maritalState',
      key: '6',
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
          <Icon type={'user'} />
          <TextTitle>{'Basic Information'}</TextTitle>
        </HeaderTitleTable>
        <Table
          columns={columns}
          dataSource={dataSource}
          expandedRowRender={ExpandedBasicInformationRow}
          pagination={false}
        />
      </TableEntryContainer>
    );
  }
}

export default BasicInformationTable;
