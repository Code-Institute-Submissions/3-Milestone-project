import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Help from '../components/Help';
import PatientsList from '../components/PatientsList';
import Welcome from '../components/Welcome';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Welcome} />
    <Route path="/help" exact component={Help} />
    <Route path="/patient" exact component={PatientsList} />
  </Switch>
);

export default Routes;

/**
 *  Routes responsible for the navigation inside the app.
 *  Export your routes to "App.tsx".
 */
