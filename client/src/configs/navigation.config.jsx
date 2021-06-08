import React from 'react';
import {
  DesktopOutlined,
  LoginOutlined,
  PlayCircleOutlined,
  UserAddOutlined
} from '@ant-design/icons';

export const MenuList = [
  {
    id: 'news-feed',
    label: 'NEWS FEED',
    icon: <DesktopOutlined />,
    url: '/'
  },
  {
    id: 'short-videos',
    label: 'SHORT VIDEOS (updating..)',
    icon: <PlayCircleOutlined />,
    url: '/'
  }
]

export const AuthList = [
  {
    id: 'register',
    label: 'REGISTER',
    icon: <UserAddOutlined />,
    url: '/register'
  },
  {
    id: 'login',
    label: 'LOG IN',
    icon: <LoginOutlined />,
    url: '/login'
  }
]