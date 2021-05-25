import React from 'react';
import { Menu } from 'antd';

//import icon
import { DesktopOutlined, PlayCircleOutlined, UserOutlined } from '@ant-design/icons';

import './navigation.scss';

export const Navigation = () => {
  return (
    <>
      <div className="logo">
        <h1>SOCIAL</h1>
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <DesktopOutlined/>
          NEWS FEED
        </Menu.Item>
        <Menu.Item key="2">
          <PlayCircleOutlined/>
          SHORT VIDEOS
        </Menu.Item>
        <Menu.Item key="3">
          <UserOutlined/>
          USERNAME
        </Menu.Item>
      </Menu>
    </>
  )
}