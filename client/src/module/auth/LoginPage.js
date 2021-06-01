import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';

import './Auth.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/redux/auth/actions';

export const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector(state => ({...state.isAuth}));

  const onFinish = (values) => {
    dispatch(loginUser(values));
    state.isLogged && history.push('/');
  };

  console.log(state);

  return (
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
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        {/*<a className="login-form-forgot" href="">*/}
        {/*  Forgot password*/}
        {/*</a>*/}
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/register">Register now!</Link>
      </Form.Item>
    </Form>
  );
}