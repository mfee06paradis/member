import React from 'react';
import SideBar from '../components/SideBar';
import Top from '../components/Top';

function EditAccount() {
  return (
    <>
      <div className="row">
      <SideBar />
        <div className="col mainCotent">
          <div>
            <img src={require('../images/account3.svg')} alt="account3" />
          </div>
          <div className="col-3"></div>
        </div>
        <div className="col-3 blank"></div>
      </div>
      <Top />
    </>
  );
}

export default EditAccount;
