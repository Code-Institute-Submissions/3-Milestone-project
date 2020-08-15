import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';
import Navbar from './components/Navbar';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Router>
      <Navbar />
      <div className="container p-2">
        <Routes />
      </div>
    </Router>
  </>
);

export default App;

// App.tsx = wraps all the app.
