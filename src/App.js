import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Cart from './pages/Cart';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Uielements from './pages/Uielements';

import Member from './pages/Member';
import EditAccount from './pages/EditAccount';
import Menu from './components/Menu';
function App() {
  return (
    <Router>
      <>
        <Menu />
        <Switch>
          <Route path="/Uielements">
            <Uielements />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route exact path="/">
            <ProductList />
          </Route>
        </Switch>
        <Member />
        <EditAccount />
      </>
    </Router>
  );
}

export default App;
