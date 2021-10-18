import firebase from 'firebase';
import React, { useState } from 'react';
import { Button, Form, Image, Input, message, Progress } from 'antd';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  MailOutlined, UploadOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { registerRequest } from '../../network/services/auth';

export const RegisterPage = () => {
  const history = useHistory();
  const [avatarImageURL, setAvatarImageURL] = useState('');
  const [progressBar, setProgressBar] = useState(0);
  const [progressBarActive, setProgressBarActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const onAvatarHandler = (e) => {
    setProgressBarActive(true);
    const fileName = e.target.files[0];
    const storageRef = firebase.storage().ref(`${fileName.name}`).put(fileName);
    storageRef.on('state_changed', (snapshot) => {
      const uploadPercent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      return setProgressBar(uploadPercent);
    }, (error) => {
      console.log(error);
    }, () => {
      setProgressBar(100);
      storageRef.snapshot.ref.getDownloadURL().then((url) => setAvatarImageURL(url));
    });
  };
  const onFinish = async (values) => {
    setLoading(true);
    await registerRequest(values, avatarImageURL).then((response) => {
      const { data } = response;
      message.success(data, 1.5).then(() => {
        setProgressBarActive(false);
        setLoading(false);
        history.push('/login');
      })
    }).catch((error) => {
      message.error(error.response.data.error, 1.5).then(() => {
        setLoading(false);
      });
    })
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      onFinish={onFinish}
    >
      <h2>SIGN UP</h2>
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
        <Input prefix={<MailOutlined className="site-form-item-icon" />}
               placeholder="Email" />
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
        <Input prefix={<UserOutlined className="site-form-item-icon" />}
               placeholder="Username" />
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
        <Input.Password
          iconRender={visible => (visible ? <EyeTwoTone /> :
            <EyeInvisibleOutlined />)}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="avatarImageURL"
        className="upload-item"
      >
        <div className="upload-btn">
          <label htmlFor="postImageURL" className="ant-btn">
            <UploadOutlined />
            Upload
          </label>
          <input type="file" id="postImageURL" accept="image/*"
                 onChange={onAvatarHandler} />
        </div>
        {
          progressBarActive && (
            <div className="upload-progress-preview">
              <Progress percent={progressBar} />
              <Image
                width={150}
                src={avatarImageURL}
              />
            </div>
          )
        }
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit"
                className="login-form-button"
                loading={loading}>
          Sign up
        </Button>
        Or <Link to="/login">Login now!</Link>
      </Form.Item>
    </Form>
  )
}
