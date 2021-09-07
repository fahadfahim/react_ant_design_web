import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { TextArea } = Input;
function ContactForm() {
    return (
        <div id='contact' className='block contactBlock'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    <h2>Get in Touch</h2>
                    <p> simply dummy  and typesetting industry. Lorem Ipsum</p>
                </div>
                <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
     
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Full Name!' }]}
      >
        <Input placeholder="Full Name" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input
          type="email"
          placeholder="Email"
        />
      </Form.Item>

      <Form.Item
        name="subject"
        rules={[{ required: true, message: 'Please input your Subject!' }]}
      >
        <Input
          type="text"
          placeholder="Subject"
        />
      </Form.Item>

      <Form.Item
        name="phone"
        rules={[{ required: true, message: 'Please input your Phone!' }]}
      >
        <Input
          type="number"
          placeholder="Subject"
        />
      </Form.Item>

      <Form.Item
        name="message"
       
      >
        <TextArea
          type="message"
          placeholder="Message"
        />
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
      
      >
        <Checkbox>
          I have read the agreement
        </Checkbox>
      </Form.Item>

      

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
        Submit
        </Button>
      
      </Form.Item>
    </Form>
            </div>
            
        </div>
    )
}

export default ContactForm
