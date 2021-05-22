import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { layout, validateMessages } from '../../configs/createPost.config';
import { createPost } from '../../network/services/post';

const CreatePost = () => {
  const [isBusy, setIsBusy] = useState(false);

  const onFinish = async (values) => {
    await createPost(values.user).then(() => {
      setIsBusy(true);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      console.log('post completed');
      setIsBusy(false);
    });
  };

  return (
    <div className="create-post">
      {isBusy && <p>Posting...</p>}
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item
          name={['user', 'username']}
          label="Username"
          rules={[{required: true},
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item name={['user', 'postContent']} label="Post content" rules={[{required: true}]}>
          <Input.TextArea/>
        </Form.Item>
        <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
          <Button type="primary" htmlType="submit">
            Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreatePost;