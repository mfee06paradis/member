import React from 'react';
import { NavLink } from 'react-router-dom';

function SideBar() {
  return (
    <>
      <div className="col-3 sideBar">
        <div className="col-8 sideBarContent">
          <img
            src={require('../images/member-icon-for-sidebar.svg')}
            alt="memberIconForSideBar"
          />
          <img
            src={require('../images/pink-ribbon-for-sidebar.svg')}
            alt="pinkRibbon"
          />

          <NavLink to="/Account" className="row sideBarText">
            <img
              className="sideBarIcon"
              src={require('../images/account.svg')}
              alt="account"
            />
            <div>
              <div>My Account</div>
              <div className="sideItems">個人資料</div>
            </div>
          </NavLink>

          <hr className="sidehr" />
          <NavLink to="/CreditCard" className="row sideBarText">
            <img
              className="sideBarIcon"
              src={require('../images/creditCard.svg')}
              alt="creditCard"
            />
            <div>
              <div>Credit Cart</div>
              <div className="sideItems">信用卡</div>
            </div>
          </NavLink>

          <hr className="sidehr" />
          <NavLink to="/" className="row sideBarText">
            <img
              className="sideBarIcon"
              src={require('../images/myorders.svg')}
              alt="myorders"
            />
            <div>
              <div>My Orders</div>
              <div className="sideItems">我的訂單</div>
            </div>
          </NavLink>

          <hr className="sidehr" />
          <NavLink to="/" className="row sideBarText">
            <img
              className="sideBarIcon"
              src={require('../images/myfavorite.svg')}
              alt="myfavorite"
            />
            <div>
              <div>My Favorite</div>
              <div className="sideItems">我的最愛</div>
            </div>
          </NavLink>

          <hr className="sidehr" />
          <div>
            <NavLink to="/">
              <img src={require('../images/logout.svg')} alt="logout" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
