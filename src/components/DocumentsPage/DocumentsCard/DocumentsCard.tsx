import React from 'react';

import {
  DocumentsCardWrapper,
  CardBlock,
  CardBlockText,
} from './styled';
export interface DocumentsCardProps {
  title?: string;
  extra?: string;
}

class DocumentsCard extends React.PureComponent<DocumentsCardProps> {
  public render(): JSX.Element {
    return (
      <DocumentsCardWrapper>
        <CardBlock title="Contributions">
          <CardBlockText>Contributions</CardBlockText>
           <CardBlockText>Platform review </CardBlockText>
           <CardBlockText>Portfolio review </CardBlockText>
           <CardBlockText>SMSF </CardBlockText>
        </CardBlock>
        <CardBlock title="Retirement Income">
           <CardBlockText>Income streams </CardBlockText>
           <CardBlockText>Platform review </CardBlockText>
           <CardBlockText>Portfolio review </CardBlockText>
       </CardBlock>
        <CardBlock title="Investment">
           <CardBlockText>Direct shares </CardBlockText>
           <CardBlockText>Portfolio review </CardBlockText>
       </CardBlock>
        <CardBlock title="Estate Planning">
           <CardBlockText>Super death benefit nomination </CardBlockText>
       </CardBlock>
        <CardBlock title="Aged Care">
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
