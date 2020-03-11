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

class SignUp extends Component {
  
  render (props) {
      return (
        <div>
          <h1 style={{ textAlign: 'center' }}>S'inscrire</h1>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
          >
            <Form.Item
              label="Pseudo"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Veuillez entrer votre pseudo !',
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
      
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Créer
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
  }
  
}

export default withAuthorization(SignUp);
