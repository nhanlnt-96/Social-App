import React, { useEffect } from 'react';
import { Menu } from 'antd';
import { Layout } from 'antd';
import './navigation.scss';
import { AuthList, MenuList } from '../../configs/navigation.config';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername, loginSuccess } from '../../store/redux/auth/actions';
import { getAuth } from '../../network/services/auth';

const {Header} = Layout;


const Navigation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getAuthUser = async () => {
      await getAuth().then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          dispatch(getUsername(response.data.username));
          dispatch(loginSuccess());
        }
      })
    }
    getAuthUser();
  }, [dispatch]);

  const state = useSelector(state => ({...state.isAuth}));
  console.log(state)

  return (
    <Header style={{position: 'fixed', zIndex: 1, width: '100%'}} className="header">
      <div className="logo">
        <h1>SOCIAL</h1>
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['news-feed']}>
        {
          state.isLogged ? MenuList.map((val) => {
            const {id, label, icon, url} = val;
            return (
              <Menu.Item key={id}>
                {icon}
                <Link to={url}>
                  {(id === 'account') ? state.response : label}
                </Link>
              </Menu.Item>
            )
          }) : AuthList.map((val) => {
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
}

export default Navigation;