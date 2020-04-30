import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// 每個頁面的元件要匯入
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Product from '../src/pages/Product';

// 匯入選單-每頁都有的
import Menu from '../src/components/Menu';
// 匯入頁尾-每頁都有的
import Footer from '../src/components/Footer';

function App7() {
  return (
    <Router>
      <>
        <Menu />
        {/* <Link to="/">首頁</Link>
        <Link to="/about">關於我們</Link>
        <Link to="/product">產品</Link> */}
        <div className="container">
          <Switch>
            {/* <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/prodcut" component={Product} /> */}

            {/* react-router v5之後的寫法 */}
            {/* 不使用<a href></a>標籤寫法, 是因為a標籤會重新載入頁面, 狀態值會初始化 */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            {/* 定義網址上的參數屬性的姓名為id */}
            {/* 加問號是可選的(可有可無) */}
            <Route path="/product/:id?/:type?">
              <Product />
            </Route>
          </Switch>
        </div>

        {/* 頁尾 */}
        <Footer />
      </>
    </Router>
  );
}

export default App7;
