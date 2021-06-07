import React from 'react';
import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { deletePostRequest } from '../../store/redux/posts/actions';
import { message, Popconfirm } from 'antd';
import { useHistory } from 'react-router-dom';

const DeleteSystem = ({postId}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onDeleteBtnClick = () => {
    dispatch(deletePostRequest(postId));
    message.success('Post is deleted ');
    history.push('/')
  }

  return (
    <Popconfirm
      title="Are you sure？"
      icon={<QuestionCircleOutlined style={{color: 'red'}} />}
      onConfirm={onDeleteBtnClick}
      okText="Yes"
      cancelText="No"
    >
      <DeleteOutlined key="delete" />
    </Popconfirm>
  );
};

export default DeleteSystem;