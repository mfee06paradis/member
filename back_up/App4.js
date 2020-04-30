import React, { useState, useEffect } from 'react';
import LoginForm from '../src/components/LoginForm';
import NavBar from '../src/components/NavBar';
// import JqueryComClass from './components/JqueryComClass';
// import JqueryComFunc from './components/JqueryComFunc';

function App4() {
  const [isAuth, setAuth] = useState(false);
  return (
    <>
      {/* 
          <JqueryComClass />
          <JqueryComFunc /> 
          */}
      <NavBar isAuth={isAuth} />
      <LoginForm isAuth={isAuth} setAuth={setAuth} />
    </>
  );
}

export default App4;
