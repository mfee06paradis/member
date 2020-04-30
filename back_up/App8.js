import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Product from '../src/pages/Product';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import NotFoundPage from '../src/pages/NotFoundPage';

import Footer from '../src/components/Footer';
import Menu from '../src/components/Menu';
import RBMenu from '../src/components/RBMenu';

import ProtectedRoute from '../src/utils/ProtectedRoute';

function App8() {
  const [login, setLogin] = useState(false);

  return (
    <Router>
      <>
        {/* <Menu /> */}
        <RBMenu />
        <div className="container">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login
                login={login}
                loginMethod={() => {
                  setLogin(true);
                }}
                logoutMethod={() => {
                  setLogin(false);
                }}
              />
            </Route>
            <ProtectedRoute path="/product">
              <Product login={login} />
            </ProtectedRoute>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            {/* 找不到頁面的路由, 需放在最後面 */}
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App8;
