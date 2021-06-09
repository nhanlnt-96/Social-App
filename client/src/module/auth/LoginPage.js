import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../../network/services/auth';
import { getAuthStart, loginSuccess } from '../../store/redux/auth/actions';

import './Auth.scss';
import ForgotPassword from '../../components/forgotPassword';

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
        dispatch(loginSuccess(data));
        dispatch(getAuthStart());
        history.push('/');
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
        <h2>LOG IN</h2>
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
          className="margin-bottom-pass"
        >
          <Input.Password
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <ForgotPassword />
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