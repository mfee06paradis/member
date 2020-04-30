import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import Member from './pages/Member';
import EditAccount from './pages/EditAccount';
function App() {
  return (
    <Router>
      <>
        <Member />
        <EditAccount />
      </>
    </Router>
  );
}

export default App;
