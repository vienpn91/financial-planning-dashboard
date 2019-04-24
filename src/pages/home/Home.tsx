import React from 'react';
import { Layout, Icon } from 'antd';
import { HomePage, HomeDesc } from './styled';
import Heading from '../../components/Heading/Heading';
import { ButtonModalFixed } from '../../components/NameAndBirthDay/styled';
import EntryTables from '../../components/EntryTables/EntryTables';
import EntryDropdown from '../../components/EntryDropdown/EntryDropdown';
import EntryTextBox from '../../components/EntryTextBox/EntryTextBox';
import EntryPicker from '../../components/EntryPicker/EntryPicker';
const { Content } = Layout;

class Home extends React.PureComponent {
  public render(): JSX.Element {
    const dropdownData = [{
      key: 1,
      link : 'http://google.com',
      value: 'Tao la Tao',
     },
     {
       key: 2,
       link: 'http://google.com',
       value: 'Tao la Tao',
    }];
    return (
      <HomePage select="true">
        <Content>
          <Heading level={2} className="subHeading" titleText="Hi John we missed you." />
          <HomeDesc>Click the plus button to start your advice</HomeDesc>
          <ButtonModalFixed size="large" shape="circle" type="primary">
            <Icon type="plus" />
          </ButtonModalFixed>
          <EntryPicker
              type="Week"
              placeholder="text"
            />
           <EntryTextBox />
        </Content>
      </HomePage>
    );
  }
}

export default Home;
