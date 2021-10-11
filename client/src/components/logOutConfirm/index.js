import React, { useState } from 'react';
import { message, Modal } from 'antd';
import { logOutSuccess } from '../../store/redux/auth/actions';
import { useDispatch } from 'react-redux';
// import { QuestionCircleOutlined } from '@ant-design/icons';

const LogOutConfirm = ({ username }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const confirm = () => {
    localStorage.removeItem('accessToken');
    dispatch(logOutSuccess());
    message.success('See you soon ! 😍');
  }

  const cancel = () => {
    message.success('We are happy to see you here 😍');
    setVisible(false);
  }
  return (
    <>
      <a className="logout-btn"
         onClick={() => setVisible(true)}>LOGOUT</a>
      <Modal
        title="LOGOUT"
        visible={visible}
        onOk={confirm}
        onCancel={cancel}
      >
        <p>You are logging out. Are you sure?</p>
      </Modal>
    </>
    // <Popconfirm
    //   title="You are logging out. Are you sure?"
    //   icon={<QuestionCircleOutlined style={{color: 'red'}} />}
    //   onConfirm={confirm}
    //   onCancel={cancel}
    //   okText="Yes"
    //   cancelText="No"
    //   placement="bottom"
    // >
    //   LOG OUT
    // </Popconfirm>
  )
}

export default LogOutConfirm;
