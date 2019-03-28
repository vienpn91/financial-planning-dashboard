import React from 'react';
import { Layout } from 'antd';
import { HomePage } from './styled';

const { Content } = Layout;
class Home extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <HomePage>
        <Content>
        </Content>
      </HomePage>
    );
  }
}

export default Home;
