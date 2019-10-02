import React from 'react';
import { Table } from 'antd';
import cn from 'classnames';
import {
  TitleStep,
  TitleStepSmall,
  StepWrapper,
} from '../styled';
import {
  DocumentsStep5WP,
} from './styled';

class DocumentsStep5 extends React.PureComponent {
  public dataSource = [
    {
      key: '1',
      insurance: 'Expenses',
      reason: 'You were unable to provide us with this information. Therefore, the supporting calculation provided in this Satement of Advice is based on the assumption that all personal cash flow is spent ',
    },
    {
      key: '2',
      insurance: 'Enter Description',
      reason: '-',
    },
  ];
  public columns = [
    {
      title: 'Missing Information',
      dataIndex: 'insurance',
      key: 'insurance',
    },
    {
      title: 'Reason for limitation',
      dataIndex: 'reason',
      key: 'reason',
    },
  ];
  public render(): JSX.Element {
    return (
      <StepWrapper>
        <TitleStep>What the advice don't covers</TitleStep>
        <TitleStepSmall>Record the items that dit fail within the scope of advice.</TitleStepSmall>
        <DocumentsStep5WP>
          <Table
            className={`table-general documents-table`}
            columns={this.columns}
            dataSource={this.dataSource}
            pagination={false}
          />
        </DocumentsStep5WP>
    </StepWrapper>
    );
  }
}

export default DocumentsStep5;
