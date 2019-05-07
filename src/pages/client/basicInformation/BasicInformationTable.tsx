import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import ExpandedBasicInformationRow from './ExpandedBasicInformationRow';
import { HeaderTitleTable, TableEntryContainer, TextTitle } from '../styled';
import GeneralTable from '../GeneralTable';
import { FormikProps } from 'formik';

interface BasicInformationProps {
  formProps?: FormikProps<any>;
  data: object[];
  tableName?: string;
  setFieldValue: (field: string, value: any) => void;
}

class BasicInformationTable extends PureComponent<BasicInformationProps> {
  protected static defaultProps = { tableName: 'basicInformation' };

  public handlers = {
    onAdd: () => {},
    onDelete: () => {},
  };

  public dataSource = [
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
  ];

  public columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      key: '0',
      editable: false,
      width: '15%',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      type: 'text',
      key: '1',
      width: '12%',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: '2',
      type: 'text',
      width: '13%',
    },
    {
      title: 'DOB',
      dataIndex: 'dob',
      key: '3',
      type: 'date',
      width: '15%',
    },
    {
      title: 'Emp Status',
      dataIndex: 'empStatus',
      key: '4',
      type: 'select',
      width: '15%',
    },
    {
      title: 'Retirement Year',
      dataIndex: 'retirementYear',
      key: '5',
      type: 'date',
      width: '15%',
    },
    {
      title: 'Marital State',
      dataIndex: 'maritalState',
      key: '6',
      type: 'select',
      width: '15%',
    },
  ];

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
          <Icon type={'user'} />
          <TextTitle>{'Basic Information'}</TextTitle>
        </HeaderTitleTable>
        <GeneralTable
          getHandlers={(handlers: any) => (this.handlers = handlers)}
          columns={columns}
          dataSource={this.dataSource}
          pagination={false}
          tableName={tableName}
          className="basic-information-table"
          newRowData={newData}
          expandedRowRender={ExpandedBasicInformationRow}
        />
      </TableEntryContainer>
    );
  }
}

export default BasicInformationTable;
