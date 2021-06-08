import React, { useState } from 'react';
import { Input, Modal } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const ForgotPassword = () => {
  const [visible, setVisible] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [newPasswordInput, setNewPasswordInput] = useState('');

  const onShowModalBtnClick = () => {
    setVisible(true);
  }

  const onEditPostBtnClick = async () => {
    console.log(usernameInput)
    console.log(newPasswordInput)
    setVisible(false);
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
        <Input placeholder="Enter your email..."
               style={{marginBottom: '24px'}}
               value={emailInput}
               onChange={(e) => {
                 setEmailInput(e.target.value)
               }} />
        <Input placeholder="Enter your username..."
               style={{marginBottom: '24px'}}
               value={usernameInput}
               onChange={(e) => {
                 setUsernameInput(e.target.value)
               }} />
        <Input.Password
          placeholder="Enter your new password..."
          value={newPasswordInput}
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          onChange={(e) => {
            setNewPasswordInput(e.target.value)
          }}
        />
      </Modal>
    </>
  );
};

export default ForgotPassword;