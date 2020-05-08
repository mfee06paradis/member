import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Uielements from './pages/Uielements';
import MemberAdd from './pages/MemberAdd';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import NotFoundPage from './pages/NotFoundPage';
import Member from './pages/Member';
import EditAccount from './pages/EditAccount';
import CreditCard from './pages/CreditCard';
import Account from './pages/Account';
import SideBar from './components/SideBar';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <>
        <Menu isAuth={isAuth} setIsAuth={setIsAuth} />
        <Switch>
          <Route path="/sidebar">
            <SideBar isAuth={isAuth} setIsAuth={setIsAuth} />
          </Route>
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
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Member">
            <Member isAuth={isAuth} setIsAuth={setIsAuth} />
          </Route>
          <Route path="/MemberAdd">
            <MemberAdd />
          </Route>
          {/* <Route exact path="/member/:MemberID?">
            <Member />
          </Route> */}
          <Route path="/EditAccount">
            <EditAccount />
          </Route>
          <Route path="/CreditCard">
            <CreditCard />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
