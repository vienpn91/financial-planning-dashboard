import React from 'react';
import { FormInput } from '../../Elements';
import {
  TitleStep,
  TitleStepSmall,
  StepWrapper,
} from '../styled';
import {
  DocumentsStep4Form,
} from './styled';

export interface DocumentsStep1Props {
  title?: string;
  extra?: string;
}

class DocumentsStep1 extends React.PureComponent<DocumentsStep1Props> {
  public render(): JSX.Element {
    return (
      <StepWrapper>
        <TitleStep>What are the client's goals, needs and objectives addressed by your super advice?</TitleStep>
        <TitleStepSmall>Enter Superannuation-related goals, need and objectives</TitleStepSmall>
        <DocumentsStep4Form>
          <textarea
            placeholder="You would like to maximize your superannation, to meet your retirement needs" />
        </DocumentsStep4Form>
    </StepWrapper>
    );
  }
}

export default DocumentsStep1;
