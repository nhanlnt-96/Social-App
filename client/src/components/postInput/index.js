import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Progress, Image, message } from 'antd';
import { useDispatch } from 'react-redux';
import { createPostRequest } from '../../store/redux/posts/actions';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const PostInput = ({ allPosts }) => {
    const [postImageURL, setPostImageURL] = useState('');
    const [progressBar, setProgressBar] = useState(0);
    const [progressBarActive, setProgressBarActive] = useState(false);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [isBusy, setIsBusy] = useState(false);

    const onImagePostHandler = (e) => {
      setProgressBarActive(true);
      const fileName = e.target.files[0];
      const storageRef = firebase.storage().ref(`${fileName.name}`).put(fileName);
      storageRef.on('state_changed', (snapshot) => {
        const uploadPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        return setProgressBar(uploadPercent);
      }, (error) => {
        console.log(error);
      }, () => {
        setProgressBar(100);
        storageRef.snapshot.ref.getDownloadURL().then((url) => setPostImageURL(url));
      });
    };

    const onFinish = (values) => {
      console.log(values)
      if (values.postContent || postImageURL) {
        setIsBusy(true);
        try {
          dispatch(createPostRequest(values, postImageURL));
          setProgressBarActive(false);
        } catch (e) {
          console.warn(e);
        } finally {
          setPostImageURL('');
          form.resetFields();
          setIsBusy(false);
        }
      }
      if (!values.postContent && !values.postImageURL) {
        message.error('Please input your post content!')
      }
    };

    return (
      <>
        {
          allPosts.allPosts &&
          <Form form={form} name="horizontal_login" layout="inline"
                onFinish={onFinish}>
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
              name="postImageURL"
              rules={[
                {
                  required: false,
                },
              ]}
              className="upload-item"
            >
              <div className="upload-btn">
                <label htmlFor="postImageURL" className="ant-btn">
                  <UploadOutlined />
                  Upload
                </label>
                <input type="file" id="postImageURL" accept="image/*"
                       onChange={onImagePostHandler} />
              </div>
              {
                progressBarActive && (
                  <div className="upload-progress-preview">
                    <Progress percent={progressBar} />
                    <Image
                      width={150}
                      src={postImageURL}
                    />
                  </div>
                )
              }
            </Form.Item>
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
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
