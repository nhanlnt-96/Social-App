import React from 'react';
import { Input, Button, Form } from 'antd';

const {TextArea} = Input;

const CommentInput = () => {
  return (
    <>
      <Form.Item>
        <TextArea autoSize />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </>
  )
}

export default CommentInput;