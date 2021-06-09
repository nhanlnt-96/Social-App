import React, { useState } from 'react';
import { Form, Input, message, Modal } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { updatePassword } from '../../network/services/auth';

import './ForgotPassword.scss';

const ForgotPassword = () => {
  const [visible, setVisible] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [newPasswordInput, setNewPasswordInput] = useState('');

  const onShowModalBtnClick = () => {
    setVisible(true);
  }

  const onEditPostBtnClick = async () => {
    await updatePassword(emailInput, usernameInput, newPasswordInput).then((response) => {
      const {data} = response;
      if (data.error) {
        message.error(data.error);
      } else {
        message.success(data);
        setVisible(false);
      }
    })
  }

  return (
    <>
      <p className="login-form-forgot" onClick={onShowModalBtnClick}>Forgot password</p>
      <Modal
        title="Forgot password"
        visible={visible}
        onOk={onEditPostBtnClick}
        onCancel={() => {
          setVisible(false)
        }}
      >
        <Form
          name="normal_update_password"
          className="forgot-pass-form"
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input
              prefix={<MailOutlined
                className="site-form-item-icon" />}
              placeholder="Email"
              onChange={(e) => {
                setEmailInput(e.target.value)
              }} />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              onChange={(e) => {
                setUsernameInput(e.target.value)
              }} />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your New Password!',
              },
            ]}
          >
            <Input.Password
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="New password"
              onChange={(e) => {
                setNewPasswordInput(e.target.value)
              }} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ForgotPassword;