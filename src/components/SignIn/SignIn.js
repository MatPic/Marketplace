import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { withAuthorization } from '../../Authorization';
import { withFirebase } from '../Firebase/Firebase';

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 4,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 4,
  },
};

class SignIn extends Component {
  
  render () {
    const onFinish = values => {
      this.props.auth.signIn(values.username, values.password);
    };
    
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Se connecter</h1>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="username"
            rules={[
              {
                required: true,
                message: 'Veuillez entrer votre email !',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Mot de passe"
            name="password"
            rules={[
              {
                required: true,
                message: 'Veuillez entrer un mot de passe !',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Se souvenir</Checkbox>
          </Form.Item>
    
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Connexion
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
  
}

export default withAuthorization(SignIn);
