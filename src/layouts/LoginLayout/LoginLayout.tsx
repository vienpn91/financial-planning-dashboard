import React from 'react';
import { Layout } from 'antd';

import Header from '../Header';

const { Content } = Layout;

class MainLayout extends React.PureComponent {
  public render(): JSX.Element {
    const { children } = this.props;

    return (
      <Layout>
        <Layout>
          <Content>
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
