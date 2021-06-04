import React from 'react';
import { Menu } from 'antd';
import { Layout } from 'antd';
import './navigation.scss';
import { MenuList } from '../../configs/navigation.config';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const {Header} = Layout;


const Navigation = () => {
  const state = useSelector(state => ({...state.allPostsData}));

  return (
    <Header style={{position: 'fixed', zIndex: 1, width: '100%'}} className="header">
      <div className="logo">
        <h1>SOCIAL</h1>
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['news-feed']}>
        {
          !state.allPosts.error && MenuList.map((val) => {
            const {id, label, icon, url} = val;
            return (
              <Menu.Item key={id}>
                {icon}
                <Link to={url}>{(id === 'account') ? state.response : label}</Link>
              </Menu.Item>
            )
          })
        }
      </Menu>
    </Header>
  )
}

export default Navigation;