import React from 'react';
import DocumentsCard from '../DocumentsCard/DocumentsCard';
import DocumentsCarousel from '../DocumentsCarousel/DocumentsCarousel';
import { TitleStep, TitleStepSmall, StepWrapper } from '../styled';
import { DocumentsStep3WP } from './styled';

class DocumentsStep3 extends React.PureComponent {
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
        <TitleStep>What the advice don't covers</TitleStep>
        <TitleStepSmall>Record the items that dit fail within the scope of advice.</TitleStepSmall>
        <DocumentsStep3WP>
          {slideNumber > 0 ? (
            <DocumentsCarousel slideNumber={slideNumber} />
          ) : (
            <DocumentsCard setSlideNumber={this.setSlideNumber} />
          )}
        </DocumentsStep3WP>
      </StepWrapper>
    );
  }
}

export default DocumentsStep3;
