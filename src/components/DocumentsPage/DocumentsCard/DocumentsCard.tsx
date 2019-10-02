import React from 'react';
import { isFunction } from 'lodash';

import { DocumentsCardWrapper, CardBlock, CardBlockText } from './styled';
export interface DocumentsCardProps {
  setSlideNumber?: (slideNumber: number) => void;
  title?: string;
  extra?: string;
}

class DocumentsCard extends React.PureComponent<DocumentsCardProps> {
  public goToSlide = (slide: number) => () => {
    const { setSlideNumber } = this.props;
    if (isFunction(setSlideNumber)) {
      setSlideNumber(slide);
    }
  }
  public render(): JSX.Element {
    return (
      <DocumentsCardWrapper>
        <CardBlock title="Super" onClick={this.goToSlide(1)}>
          <CardBlockText>Contributions</CardBlockText>
          <CardBlockText>Platform review </CardBlockText>
          <CardBlockText>Portfolio review </CardBlockText>
          <CardBlockText>SMSF </CardBlockText>
        </CardBlock>
        <CardBlock title="Retirement Income" onClick={this.goToSlide(2)}>
          <CardBlockText>Income streams </CardBlockText>
          <CardBlockText>Platform review </CardBlockText>
          <CardBlockText>Portfolio review </CardBlockText>
        </CardBlock>
        <CardBlock title="Investment" onClick={this.goToSlide(3)}>
          <CardBlockText>Direct shares </CardBlockText>
          <CardBlockText>Portfolio review </CardBlockText>
        </CardBlock>
        <CardBlock title="Estate Planning" onClick={this.goToSlide(4)}>
          <CardBlockText>Super death benefit nomination </CardBlockText>
        </CardBlock>
        <CardBlock title="Aged Care" onClick={this.goToSlide(5)}>
          <CardBlockText>Home Care </CardBlockText>
        </CardBlock>
        <CardBlock title="New Title">
          <CardBlockText>Card content </CardBlockText>
          <CardBlockText>Card content </CardBlockText>
          <CardBlockText>Card content </CardBlockText>
        </CardBlock>
      </DocumentsCardWrapper>
    );
  }
}

export default DocumentsCard;
