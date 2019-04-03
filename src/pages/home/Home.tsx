import React from 'react';
import { Layout, Icon } from 'antd';
import { HomePage, HomeDesc } from './styled';
import Heading from '../../components/Heading/Heading';
import ModalNameAndBirthDay from '../../components/NameAndBirthDay/NameAndBirthDay';
const { Content } = Layout;

class Home extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <HomePage select="true">
        <Content>
          <Heading level={2}  className="subHeading" titleText="Hi John we missed you." />
          <HomeDesc>Click the plus button to start your advice</HomeDesc>
          <ModalNameAndBirthDay />
        </Content>
      </HomePage>
    );
  }
}

export default Home;
