import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Help from '../components/Help';
import CreatePatient from '../components/CreatePatient';
import ListPatient from '../components/ListPatients';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/list" exact component={ListPatient} />
    <Route path="/help" exact component={Help} />
    <Route path="/" exact component={CreatePatient} />
  </Switch>
);

export default Routes;

/**
 *  Routes responsible for the navigation inside the app.
 *  Export your routes to "App.tsx".
 */
