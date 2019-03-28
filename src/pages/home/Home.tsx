import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../../layouts/Sidebar';
import { TestStyled } from './styled';

const { Content } = Layout;
class Home extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <Layout>
        <Content>
          <TestStyled size="true">
            Test component
          </TestStyled>
        </Content>
      </Layout>
    );
  }
}

export default Home;
