import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Help from '../components/Help';
import PatientsList from '../components/PatientsList';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/help" exact component={Help} />
    <Route path="/" exact component={PatientsList} />
  </Switch>
);

export default Routes;

/**
 *  Routes responsible for the navigation inside the app.
 *  Export your routes to "App.tsx".
 */
