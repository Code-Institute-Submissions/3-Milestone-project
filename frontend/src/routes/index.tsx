import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Help from '../components/Help';
import Patient from '../components/Patient';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/help" exact component={Help} />
    <Route path="/" exact component={Patient} />
  </Switch>
);

export default Routes;
