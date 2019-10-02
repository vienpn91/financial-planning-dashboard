import React from 'react';
import { FormInput } from '../../Elements';
import {
  TitleStep,
  TitleStepSmall,
  StepWrapper,
} from '../styled';
import {
  DocumentsStep1Form,
} from './styled';

export interface DocumentsStep1Props {
  title?: string;
  extra?: string;
}

class DocumentsStep1 extends React.PureComponent<DocumentsStep1Props> {
  public render(): JSX.Element {
    return (
      <StepWrapper>
        <TitleStep>why did lan & Deborah seek advice?</TitleStep>
        <TitleStepSmall>Your purpose for seeking advice</TitleStepSmall>
        <DocumentsStep1Form>
          <textarea
            placeholder="What are your reasons for seeking financial advice? For example, 
            are you going through a life event,
            such as starting a family or retrenchment, or are you planning for a future event such  as retirement?
            You may wish to include any personal goals
            you have. For example, do you want to spend
            less time worrying about money and more time
            with your family, or would you like to be in
            a financial position to  reduce your working hours?" />
        </DocumentsStep1Form>
    </StepWrapper>
    );
  }
}

export default DocumentsStep1;
