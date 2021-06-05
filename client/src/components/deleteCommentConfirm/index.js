import React from 'react';
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../store/redux/comments/actions';
import { useParams } from 'react-router-dom';

const DeleteCommentConfirm = ({commentId}) => {
  const {id} = useParams();
  const dispatch = useDispatch();

  const confirm = () => {
    dispatch(deleteComment(id, commentId));
  }

  return (
    <Popconfirm
      title="Are you sure？"
      icon={<QuestionCircleOutlined style={{color: 'red'}} />}
      onConfirm={confirm}
      okText="Yes"
      cancelText="No"
    >
      Delete
    </Popconfirm>
  );
}

export default DeleteCommentConfirm;