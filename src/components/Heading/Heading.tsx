import React from 'react';
import { HeadingWrapper } from './styled';
import { Typography } from 'antd';
const { Title } = Typography;

declare const TITLE_ELE_LIST: [1, 2, 3, 4];
export interface HeadingProps {
  titleText?: string;
  level?: (typeof TITLE_ELE_LIST)[number];
  className?: string;
}

class Heading extends React.PureComponent<HeadingProps> {
  public render(): JSX.Element {
    const { level, titleText, className } = this.props;
    const titleLevel = level || 1;
    return (
      <HeadingWrapper className={className}>
        <Title level={titleLevel}>{titleText}</Title>
      </HeadingWrapper>
    );
  }
}

export default Heading;
