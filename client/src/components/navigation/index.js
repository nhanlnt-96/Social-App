import React from 'react';
import { Menu } from 'antd';
import Logo from '../../assets/linkedin_logo.png';

import './navigation.scss'

export const Navigation = () => {
  return (
    <>
      <div className="logo">
        <img src={Logo} alt="linkedin-logo"/>
      </div>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </>
  )
}