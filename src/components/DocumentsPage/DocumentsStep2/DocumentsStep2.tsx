import React from 'react';
import DocumentsCard from '../DocumentsCard/DocumentsCard';
import DocumentsCarousel from '../DocumentsCarousel/DocumentsCarousel';
import { TitleStep, TitleStepSmall, StepWrapper } from '../styled';
import { DocumentsStep2WP } from './styled';

class DocumentsStep2 extends React.PureComponent {
  public state = {
    slideNumber: 0,
  };
  public setSlideNumber = (slideNumber: number) => {
    this.setState({ slideNumber });
  }
  public render(): JSX.Element {
    const { slideNumber } = this.state;
    return (
      <StepWrapper>
        <TitleStep>What the advice covers</TitleStep>
        <TitleStepSmall>Record the scope of advice, as agreed between you and the client.</TitleStepSmall>
        <DocumentsStep2WP>
          {slideNumber > 0 ? (
            <DocumentsCarousel slideNumber={slideNumber} />
          ) : (
            <DocumentsCard setSlideNumber={this.setSlideNumber} />
          )}
        </DocumentsStep2WP>
      </StepWrapper>
    );
  }
}

export default DocumentsStep2;
