import React from 'react';
import SideBar from '../components/SideBar';
import Top from '../components/Top';
import Address from '../components/Address';
import { NavLink } from 'react-router-dom';
function Account() {
  return (
    <>
      <div className="row">
        <SideBar />

        <div className="col mainCotent">
          <div>
            <img src={require('../images/account3.svg')} alt="account3" />
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-6 lastpage">
              <NavLink to="/">
                <img src={require('../images/lastpage.svg')} alt="lastpage" />
              </NavLink>
            </div>
          </div>

          <form action="" className="row MobileEditcontent">
            <div className="col-8 container table-bg">
              <table className="editTable">
                <tbody>
                  <tr className="bBorder">
                    <div className="row ">
                      <span className="col-6">
                        <img
                          src={require('../images/member-icon-for-sidebar.svg')}
                          alt="memberIconForSideBar"
                        />
                      </span>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-10">
                        <td>E-mail帳號:</td>
                        <br />
                        <label className="accountText">12345678</label>
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-9">密碼:</div>
                      <br />
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">
                        暱稱&nbsp;&nbsp;
                        <span className="necessaryItem">必填</span>
                      </div>
                      <div className="col-1"></div>
                      <div className="col-8 "></div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11">性別</div>
                      <div className="col-1"></div>
                    </div>
                  </tr>
                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">生日</div>
                      <div className="col-1"></div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11">
                        手機&nbsp;&nbsp;
                        <span className="necessaryItem">必填</span>
                      </div>
                      <div className="col-1"></div>
                      <div className="col-8"></div>
                    </div>
                  </tr>

                  <tr className="address">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">
                        地址&nbsp;&nbsp;
                        <span className="necessaryItem">必填</span>
                      </div>
                      <div className="col-1"></div>
                      <div className="col-3" style={{ visibility: 'hidden' }}>
                        <p>縣市</p>
                      </div>
                      <div className="col-6" style={{ visibility: 'hidden' }}>
                        <Address style={{ textAlign: 'left', textIndent: 0 }} />
                      </div>
                      <div className="col-12"></div>
                      <div className="col-1"></div>
                      <input
                        type="text"
                        style={{
                          height: '6em',
                          width: '80%',
                          visibility: 'hidden',
                        }}
                      />
                    </div>
                  </tr>
                  <tr className="lastRow"></tr>
                </tbody>
              </table>
            </div>
          </form>
          <div class="row">
            <div className="col-6 editButtonMobile">
              <NavLink to="/">
                <img src={require('../images/logout.svg')} alt="logout" />
              </NavLink>
            </div>
            <div className="col-6 editButtonMobile">
              <NavLink to="/EditAccount">
                <img
                  src={require('../images/editButton.svg')}
                  alt="editButton"
                />
              </NavLink>
            </div>
          </div>

          <form action="" className="row content">
            <div className="col-lg-12 container table-bg">
              <table className="editTable">
                <tbody>
                  <tr className="bBorder" style={{ marginBottom: '10px' }}>
                    <div className="row">
                      <div className="col-1 align-self-end">
                        <td style={{ paddingBottom: '30px' }}>頭像</td>
                      </div>
                      <div className="col-2"></div>
                      <div className="col-6">
                        <img
                          src={require('../images/member-icon-for-sidebar.svg')}
                          alt="memberIconForSideBar"
                        />
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-10">
                        <td>E-mail帳號:</td>
                        <br />
                        <label className="accountText">12345678</label>
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-9">密碼:</div>
                      <br />
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">
                        暱稱&nbsp;&nbsp;
                        <span className="necessaryItem">必填</span>
                      </div>
                      <div className="col-1"></div>
                      <div className="col-8 "></div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11">性別</div>
                      <div className="col-1"></div>
                    </div>
                  </tr>
                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">生日</div>
                      <div className="col-1"></div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11">
                        手機&nbsp;&nbsp;
                        <span className="necessaryItem">必填</span>
                      </div>
                      <div className="col-1"></div>
                      <div className="col-8"></div>
                    </div>
                  </tr>

                  <tr className="address">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">
                        地址&nbsp;&nbsp;
                        <span className="necessaryItem">必填</span>
                      </div>

                      <div className="col-3" style={{ visibility: 'hidden' }}>
                        <p>縣市</p>
                      </div>
                      <div className="col-4" style={{ visibility: 'hidden' }}>
                        <Address />
                      </div>
                      <div className="col-12"></div>
                      <div className="col-1"></div>
                      <div className="col-10" style={{ visibility: 'hidden' }}>
                        <input type="text" style={{ height: '6em' }} />
                      </div>
                    </div>
                  </tr>
                  <tr className="lastRow"></tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
        <div className="col-3 sideBar">
          <NavLink to="/EditAccount">
            <div className="editButton" style={{ marginTop: '80%' }}>
              <img src={require('../images/editButton.svg')} alt="editButton" />
            </div>
          </NavLink>
        </div>
      </div>
      <Top />
    </>
  );
}

export default Account;
