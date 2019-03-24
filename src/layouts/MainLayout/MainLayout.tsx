import React from 'react';
import { Layout } from 'antd';

import Header from '../Header';
import Sidebar from '../Sidebar';

const { Content } = Layout;

class MainLayout extends React.PureComponent {
  public render(): JSX.Element {
    const { children } = this.props;

    return (
      <Layout>
        <Header />
        <Layout>
          <Sidebar />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 'calc(100vh - 88px)',
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
