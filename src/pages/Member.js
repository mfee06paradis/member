import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar';
import { NavLink } from 'react-router-dom';
import '../styles/member.scss';
import { withRouter } from 'react-router-dom';

function Member(props) {
  const member = localStorage.getItem('Member') || [];
  const parseUserMember = JSON.parse(member);
  const nameParseUserMember = parseUserMember.MemberName;
  const sliceNameParseUserMember = nameParseUserMember.slice(1);

  return (
    <>
      <div className="row bg-white">
        <SideBar />

        <div className="col mainCotent">
          <div className="col-12 memberdec">
            <img src={require('../images/memberdec.svg')} alt="memberdec" />
          </div>
          <NavLink to="/Account">
            <img
              className="registerBox2"
              src={require('../images/registerbox2.svg')}
              alt="registerBox2"
            />
          </NavLink>
          <div className="col-12">
            <img src={require('../images/member-icon.svg')} alt="membericon" />
          </div>
          <div className="col-12" style={{ height: '6em' }}>
            <div className="pinkRibbon">歡迎! {sliceNameParseUserMember}</div>
          </div>
          <NavLink to="/Account" className="nav-link" activeClassName="active">
            <div className="col-12">
              <img
                className="registerBox"
                src={require('../images/registerbox.svg')}
                alt="registerbox"
              />
            </div>
          </NavLink>

          {/* -------------------Mobile-------------------- */}
          <div className="row">
            <div className="col-6">
              <NavLink
                to="/Account"
                className="nav-link"
                activeClassName="active"
              >
                <img
                  src={require('../images/account2.svg')}
                  alt="account2"
                  className="mobileIcon"
                />
              </NavLink>
            </div>
            <div className="col-6">
              <NavLink
                to="/CreditCard"
                className="nav-link"
                activeClassName="active"
              >
                <img
                  src={require('../images/creditCard2.svg')}
                  alt="creditCard2"
                  className="mobileIcon"
                />
              </NavLink>
            </div>
            <div className="col-6">
              <NavLink
                to="/myorders"
                className="nav-link"
                activeClassName="active"
              >
                <img
                  src={require('../images/myorder2.svg')}
                  alt="myorder2"
                  className="mobileIcon"
                />
              </NavLink>
            </div>
            <div className="col-6">
              <NavLink
                to="/myfavorite"
                className="nav-link"
                activeClassName="active"
              >
                <img
                  src={require('../images/myfavorite2.svg')}
                  alt="myfavorite2"
                  className="mobileIcon"
                />
              </NavLink>
            </div>
            <div className="col-2"></div>
            <div className="col-8">
              <img
                src={require('../images/logout.svg')}
                alt="logout"
                className="mobileIcon"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  alert('已成功登出');
                  localStorage.clear();
                  props.history.push('/home');
                }}
              />
            </div>
          </div>
          {/* -------------------Mobile-------------------- */}
        </div>
        <div className="col-3 sideBar"></div>
      </div>
    </>
  );
}

export default withRouter(Member);
