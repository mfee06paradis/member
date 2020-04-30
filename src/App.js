import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import Member from './pages/Member';

function App() {
  return (
    <Router>
      <>
        <Member />
      </>
    </Router>
  );
}

export default App;
