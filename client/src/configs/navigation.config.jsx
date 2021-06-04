import React from 'react';
import {
  DesktopOutlined,
  LoginOutlined,
  LogoutOutlined,
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
    label: 'SHORT VIDEOS',
    icon: <PlayCircleOutlined />,
    url: '/'
  },
  {
    id: 'account',
    label: 'LOGOUT',
    icon: <LogoutOutlined />,
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