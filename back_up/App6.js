import React, { useState, useEffect } from 'react';

import { FaReact } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { GiSwordman } from 'react-icons/gi';

// //導入scss, 不需加名稱, 直接導入路徑即可
// import './style/custom.scss';

function App() {
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      <div className="alert alert-secondary" role="alert">
        A simple secondary alert—check it out!
      </div>
      {/* <Button variant="primary">
        <FaReact className="pink-icon" /> React v16
      </Button>

      <GiSwordman className="green-icon" /> */}
      {/* <GiSwordman color="red" size="4em" /> */}
      {/* 可透過style來自行定義color跟size,  style要變成js的物件值(雙花括號)  */}
      {/* <GiSwordman style={{ fontSize: 100, color: 'green' }} />  */}
    </>
  );
}

export default App;
