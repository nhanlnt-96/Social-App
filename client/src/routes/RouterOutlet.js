import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from '../configs/router.config';

const RouterOutlet = () => {
  return (
    <Router>
      <Switch>
        {
          routes.map((val, index) => {
            const {path, isExact, module} = val;
            return (
              <Route key={index} path={path} exact={isExact} component={module}/>
            )
          })
        }
      </Switch>
    </Router>
  )
}

export default RouterOutlet;