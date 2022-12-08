import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RouteEnum from './enums';

import { Home, Game } from '../screens';

const Routes: React.FC = () => (
  <Switch>
    <Route path={RouteEnum.BASE} exact component={Home} />
    <Route path={`${RouteEnum.GAME}/:id`} component={Game} />
  </Switch>
);

export default Routes;
