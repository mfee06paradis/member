import React from 'react';
import Banner from '../components/Banner';
import Breadcrumb from '../components/Breadcrumb';
import { withRouter } from 'react-router-dom';
function Login(props) {
  //得到login, loginMethod, logoutMethod
  console.log(props);
  return (
    <>
      <Banner pagename="會員登出入" />
      <Breadcrumb />
      <h1>目前會員登入狀態:{props.login ? '登入中' : '未登入'}</h1>
      <button onClick={props.loginMethod}>登入</button>
      <button onClick={props.logoutMethod}>登出</button>
    </>
  );
}

export default withRouter(Login);
