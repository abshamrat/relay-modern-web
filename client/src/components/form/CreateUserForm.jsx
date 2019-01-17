import {
    Form, Input, DatePicker, Button
  } from 'antd';
  
  import React, {Component} from 'react'
  
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
  };
  
  
  class CreateUserForm extends Component {

    constructor(props) {
      super(props);
      this.state = {
        formLayout: 'horizontal',
      };
    }
    render() {
      const buttonItemLayout = this.state.formLayout === 'horizontal' ? {
        wrapperCol: { span: 14, offset: 5 },
      } : null;
        return (
          <Form>
            <Form.Item
              {...formItemLayout}
              label="User Name"
              validateStatus="success"
            >
              <Input placeholder="User Name" id="error" />
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label="Mobile No"
              validateStatus="success"
            >
              <Input placeholder="Mobile No" id="mobile_no" />
            </Form.Item>
        
            <Form.Item
              {...formItemLayout}
              label="Email Address"
              validateStatus="success"
            >
              <Input placeholder="Email Address" id="email_address" />
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label="Date Of Birth"
              hasFeedback
              validateStatus="success"
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
              <Button type="primary">Submit</Button>
            </Form.Item>  
        </Form>      
        )
    }
  }

const CUF = Form.create()(CreateUserForm);

export default CUF;