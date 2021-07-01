import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { createPostRequest } from '../../store/redux/posts/actions';
import FileBase64 from 'react-file-base64';

const {TextArea} = Input;

const PostInput = ({allPosts}) => {
    const [postImage, setPostImage] = useState('');
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [isBusy, setIsBusy] = useState(false);

    const onFinish = (values) => {
      setIsBusy(true);
      try {
        dispatch(createPostRequest(values, postImage));
      } catch (e) {
        console.warn(e);
      } finally {
        form.resetFields();
        setIsBusy(false);
      }
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
              <FileBase64
                type="file"
                multiple={false}
                onDone={({base64}) => setPostImage(base64)}
              />
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
                  loading={isBusy}
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