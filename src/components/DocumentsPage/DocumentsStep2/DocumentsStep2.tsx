import React from 'react'

import DocumentsCard from '../DocumentsCard/DocumentsCard';
import {
  TitleStep,
  TitleStepSmall,
  StepWrapper,
} from '../styled';
import {
  DocumentsStep2WP
} from './styled';

class DocumentsStep2 extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <StepWrapper>
        <TitleStep>What the advice covers</TitleStep>
        <TitleStepSmall>Record the scope of advice, as agreed between you and the client.</TitleStepSmall>
        <DocumentsStep2WP>
          <DocumentsCard />
        </DocumentsStep2WP>
    </StepWrapper>
    );
  }
}

export default DocumentsStep2;
