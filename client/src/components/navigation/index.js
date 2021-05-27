import React from 'react';
import { Menu } from 'antd';
import { Layout } from 'antd';
import './navigation.scss';
import { MenuList } from "../../configs/navigation.config";
import { Link } from "react-router-dom";

const {Header} = Layout;


const Navigation = () => {
  return (
    <Header style={{position: 'fixed', zIndex: 1, width: '100%'}} className="header">
      <div className="logo">
        <h1>SOCIAL</h1>
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['news-feed']}>
        {
          MenuList.map((val) => {
            const {id, label, icon, url} = val;
            return (
              <Menu.Item key={id}>
                {icon}
                <Link to={url}>{label}</Link>
              </Menu.Item>
            )
          })
        }
      </Menu>
    </Header>
  )
}

export default Navigation;