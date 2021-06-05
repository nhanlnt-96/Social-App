import React from 'react';
import { message, Modal, Popconfirm } from 'antd';
import { logOutSuccess } from '../../store/redux/auth/actions';
import { useDispatch } from 'react-redux';
import { QuestionCircleOutlined } from '@ant-design/icons';

const LogOutConfirm = ({username}) => {
  const dispatch = useDispatch();

  const confirm = () => {
    localStorage.removeItem('accessToken');
    dispatch(logOutSuccess());
    message.success('See you soon ! 😍');
  }

  const cancel = () => {
    message.success('We are happy to see you here 😍');
  }
  return (
    <Popconfirm
      title="You are logging out. Are you sure？"
      icon={<QuestionCircleOutlined style={{color: 'red'}} />}
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
      placement="bottom"
    >
      LOG OUT
    </Popconfirm>
  )
}

export default LogOutConfirm;