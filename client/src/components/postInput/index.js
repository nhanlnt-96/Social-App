import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { createPostRequest } from '../../store/redux/posts/actions';

const {TextArea} = Input;

const PostInput = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    dispatch(createPostRequest(values));
    form.resetFields();
  };

  return (
    <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
      <Form.Item
        name="postContent"
        rules={[
          {
            required: false,
            message: 'Please input your post content !',
          },
        ]}
      >
        <TextArea placeholder="What's on your mind ?" autoSize />
      </Form.Item>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username !',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({errors}) => errors.length).length
            }
          >
            Post
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default PostInput;