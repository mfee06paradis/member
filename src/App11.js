import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';

import Menu from './components/Menu3';
import UserList from './pages/UserList';
import UserEdit from './pages/UserEdit';
import UserAdd from './pages/UserAdd';
function App11() {
  return (
    <Router>
      <>
        <div className="container">
          <Menu />

          <Switch>
            <Route exact path="/">
              <UserList />
            </Route>
            <Route exact path="/edit/:userid?">
              <UserEdit />
            </Route>
            <Route exact path="/add">
              <UserAdd />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App11;
