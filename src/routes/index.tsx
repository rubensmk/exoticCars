import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Car from '../pages/Car';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/car" exact component={Car} />
    </Switch>
  );
};

export default Routes;
