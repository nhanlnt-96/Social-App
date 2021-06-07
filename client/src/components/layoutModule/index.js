import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from '../../configs/router.config';

//import layout antd
import { Layout } from 'antd';
import { useSelector } from 'react-redux';

const {Content} = Layout;

const LayoutModule = () => {
  const token = localStorage.getItem('accessToken');
  const state = useSelector(state => ({...state.isAuth}));

  const renderComponent = (module, isPrivate, token, isLogged) => () => {
    if (isPrivate) {
      return (token || isLogged) ? module : <Redirect to="/login" />
    }
    return module;
  }

  return (
    <Content className="site-layout content" style={{padding: '0 50px', marginTop: 64}}>
      <Switch>
        {
          routes.map((val, index) => {
            const {path, isExact, module, isPrivate} = val;
            return (
              <Route key={index} path={path} exact={isExact}>
                {renderComponent(module, isPrivate, token, state.isLogged)}
              </Route>
            )
          })
        }
      </Switch>
    </Content>
  )
}

export default LayoutModule;