import React from 'react';
import { DesktopOutlined, PlayCircleOutlined, UserOutlined } from '@ant-design/icons';

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
    label: 'ACCOUNT',
    icon: <UserOutlined />,
    url: '/'
  },
]