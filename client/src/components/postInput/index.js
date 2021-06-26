import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { createPostRequest } from '../../store/redux/posts/actions';
import FileBase from 'react-file-base64';
import { UploadOutlined } from '@ant-design/icons';

const {TextArea} = Input;

const PostInput = ({allPosts}) => {
    const [postImage, setPostImage] = useState(null);
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onFinish = (values) => {
      dispatch(createPostRequest(values, postImage));
      form.resetFields();
      console.log(postImage)
    };

    return (
      <>
        {
          allPosts.allPosts && <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
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
              name="postFile"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <FileBase name="image" type="file" multiple={false} onDone={({base64}) => setPostImage(base64)} />
            </Form.Item>
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  // disabled={
                  //   !form.isFieldsTouched(true) ||
                  //   !!form.getFieldsError().filter(({errors}) => errors.length).length
                  // }
                >
                  Post
                </Button>
              )}
            </Form.Item>
          </Form>
        }
      </>
    );
  }
;

export default PostInput;