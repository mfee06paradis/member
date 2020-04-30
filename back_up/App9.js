import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import Cart from '../src/pages/Cart';
import ProductList from '../src/pages/ProductList';
import Product from '../src/pages/Product';

import Menu2 from '../src/components/Menu2';

function App7() {
  return (
    <Router>
      <>
        <div className="container">
          <Menu2 />

          <Switch>
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
        </div>
      </>
    </Router>
  );
}

export default App7;
