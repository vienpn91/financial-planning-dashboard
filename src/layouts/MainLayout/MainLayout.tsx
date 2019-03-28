import React from 'react';
import { Layout ,Icon} from 'antd';

import Header from '../Header';
import Sidebar from '../Sidebar';

const { Content } = Layout;

class MainLayout extends React.PureComponent {
 
  public render(): JSX.Element {
    const { children } = this.props;

    return (
      <Layout>
        <Sidebar />
        <Layout>
          <Header/>
          <Content>
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
