import React from 'react';
import { Modal, Icon, Button, Form, Input, DatePicker } from 'antd';
import { ModalNameBirthDay, ButtonModalFixed, TitleForm, ModalFormHome } from './styled';

const modalStyled = {
 
}
class NameAndBirthDay extends React.PureComponent {
  public state = {
    ModalText: 'What’s your name?',
    visible: false,
    confirmLoading: false,
  }

  public showModal = () => {
    this.setState({
      visible: true,
    });
  }

  public handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
  }

  public handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }
  public render(): JSX.Element {
    const { visible, confirmLoading, ModalText } = this.state;
    // const { getFieldDecorator } = this.props.form;
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    return (
      <ModalNameBirthDay>
        <ButtonModalFixed onClick={this.showModal} size="large" shape="circle" type="primary">
            <Icon type="plus" />
        </ButtonModalFixed>
        <Modal
          centered
          wrapClassName="modal-customize"
          title="Let’s get to know each other"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          width={920}
          style={{ padding: 0, left: '20' }}
          bodyStyle= {{padding: 0 }}
          footer={[
            <Button key="back" type="default" onClick={this.handleCancel}>Cancel</Button>,
            <Button key="submit" type="primary" loading={confirmLoading} onClick={this.handleOk}>
              Next
            </Button>,
          ]}
        >
          <TitleForm>What’s your name?</TitleForm>
          <ModalFormHome className="modal-from-home" layout="horizontal">
            <Form.Item label="FIRST NAME" >
              <Input placeholder="Jack" />
            </Form.Item>
            <Form.Item label="LAST NAME" >
              <Input placeholder="Rayan" />
            </Form.Item>
            <Form.Item label="DATE OF BIRTH" >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </ModalFormHome>
        </Modal>
      </ModalNameBirthDay>
    );
  }
}

export default NameAndBirthDay;
