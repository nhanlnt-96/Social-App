import firebase from 'firebase';
import React from 'react';
import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { deletePostRequest } from '../../store/redux/posts/actions';
import { message, Popconfirm } from 'antd';
import { useHistory } from 'react-router-dom';

const DeleteSystem = ({ data }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onDeleteBtnClick = () => {
    dispatch(deletePostRequest(data._id));
    if (data.postImageURL) {
      const deleteRef = firebase.storage().refFromURL(data.postImageURL);
      deleteRef.delete().then(() => {
        console.log('Deleted')
      }).catch((e) => {
        console.log(e);
      });
    }
    history.push('/');
    message.success('Post is deleted');
  }

  return (
    <Popconfirm
      title="Are you sure？"
      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      onConfirm={onDeleteBtnClick}
      okText="Yes"
      cancelText="No"
    >
      <DeleteOutlined key="delete" />
    </Popconfirm>
  );
};

export default DeleteSystem;
