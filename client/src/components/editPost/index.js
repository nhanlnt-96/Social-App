import React, { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Input, Modal } from 'antd'
import { useDispatch } from 'react-redux';
import { editPostRequest } from '../../store/redux/posts/actions';

const EditPost = ({postId, postText}) => {
  const [visible, setVisible] = useState(false);
  const [newPostText, setNewPostText] = useState(postText);
  const dispatch = useDispatch();

  const onShowModalBtnClick = () => {
    setVisible(true);
  }

  const onEditPostBtnClick = async () => {
    dispatch(editPostRequest(postId, newPostText));
    setVisible(false)
  }

  return (
    <>
      <EditOutlined key="edit" onClick={onShowModalBtnClick} />
      <Modal
        title="Edit post"
        visible={visible}
        onOk={onEditPostBtnClick}
        onCancel={() => {
          setVisible(false)
        }}
      >
        <Input value={newPostText} onChange={(e) => {
          setNewPostText(e.target.value)
        }} />
      </Modal>
    </>
  );
};

export default EditPost;