import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';

import Menu from '../src/components/Menu2';
import Counter from '../src/pages/Counter';

function App10() {
  return (
    <Router>
      <>
        <div className="container">
          <Menu />

          <Switch>
            <Route exact path="/">
              <Counter />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App10;
