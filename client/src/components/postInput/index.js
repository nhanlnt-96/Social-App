import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { createPost } from "../../network/services/post";

const {TextArea} = Input;

const PostInput = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const [isBusy, setIsBusy] = useState(false);

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = async (values) => {
    await createPost(values).then(() => {
      setIsBusy(true);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      setIsBusy(false);
      console.log('posted');
    })
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
      {isBusy && console.log('loading...')}
    </Form>
  );
};

export default PostInput;