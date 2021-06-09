import React, { useEffect } from 'react';
import { Menu } from 'antd';
import { Layout } from 'antd';
import './navigation.scss';
import { AuthList, MenuList } from '../../configs/navigation.config';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthStart, getAuthSuccess, loginSuccess } from '../../store/redux/auth/actions';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import LogOutConfirm from '../logOutConfirm';
import { getAuth } from '../../network/services/auth';

const {Header} = Layout;

const Navigation = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => ({...state.isAuth}));

  useEffect(() => {
    dispatch(getAuthStart());
  }, [dispatch]);

  return (
    <Header style={{position: 'fixed', zIndex: 1, width: '100%'}} className="header">
      <div className="logo">
        <h1><Link to="/">SOCIAL</Link></h1>
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['news-feed']}>
        {
          state.isLogged ? (
            <>
              {MenuList.map((val) => {
                const {id, label, icon, url} = val;
                return (
                  <Menu.Item key={id}>
                    {icon}
                    <Link to={url}>
                      {label}
                    </Link>
                  </Menu.Item>
                )
              })}
              <Menu.Item key="account">
                <UserOutlined />
                <Link to={`/profile/${state.userAuth.id}`}>{state.userAuth.username}</Link>
              </Menu.Item>
              <Menu.Item key="logout">
                <LogoutOutlined />
                <LogOutConfirm />
              </Menu.Item>
            </>
          ) : AuthList.map((val) => {
            const {id, label, icon, url} = val;
            return (
              <Menu.Item key={id}>
                {icon}
                <Link to={url}>
                  {(id === 'account') ? state.response : label}
                </Link>
              </Menu.Item>
            )
          })
        }
      </Menu>
    </Header>
  )
};

export default Navigation;