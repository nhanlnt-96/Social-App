import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../../network/services/auth';

import './Auth.scss';
import { loginSuccess } from '../../store/redux/auth/actions';

export const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    await loginRequest(values).then((response) => {
      const {data} = response;
      if (data.error) {
        message.error(data.error);
      } else {
        localStorage.setItem('accessToken', data.accessToken);
        dispatch(loginSuccess(data.username));
        history.push('/')
      }
    })
  };


  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          {/*<Form.Item name="remember" valuePropName="checked" noStyle>*/}
          {/*  <Checkbox>Remember me</Checkbox>*/}
          {/*</Form.Item>*/}

          {/*  /!*<a className="login-form-forgot" href="">*!/*/}
          {/*  /!*  Forgot password*!/*/}
          {/*  /!*</a>*!/*/}
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to="/register">Register now!</Link>
        </Form.Item>
      </Form>
    </>
  );
}