import React from 'react';
import SideBar from '../components/SideBar';
import Top from '../components/Top';
import Address from '../components/Address';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import '../styles/member.scss';

function EditAccount(props) {
  return (
    <>
      <div className="row bg-white">
        <SideBar />

        <div className="col mainCotent">
          <div>
            <img src={require('../images/account3.svg')} alt="account3" />
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-6 lastpage">
              <img
                src={require('../images/lastpage.svg')}
                alt="lastpage"
                className="nav-link"
                activeClassName="active"
                onClick={() => {
                  props.history.goBack();
                }}
              />
            </div>
          </div>
          {/* -----------------------Mobile-------------------------- */}
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
                      <button className="chooseAvatar text-center">
                        選擇圖像
                      </button>
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
                        <span className="table-label">必填</span>
                      </div>
                      <div className="col-1"></div>
                      <div className="col-8 ">
                        <input className="nickName" type="text" />
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11">性別</div>
                      <div className="col-1"></div>
                      <div className="col">
                        <select style={{ color: '#656765' }}>
                          <option selected disabled>
                            請選擇
                          </option>
                          <option>男</option>
                          <option>女</option>
                        </select>
                      </div>
                    </div>
                  </tr>
                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">生日</div>
                      <div className="col-1"></div>
                      <div className="col">
                        <input
                          style={{ color: '#656765' }}
                          placeholder=""
                          type="date"
                          name="dateofbirth"
                          id="dateofbirth"
                        />
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11">
                        手機&nbsp;&nbsp;
                        <span className="table-label">必填</span>
                      </div>
                      <div className="col-1"></div>
                      <div className="col-8">
                        <input type="text" className="cellphone" />
                      </div>
                    </div>
                  </tr>

                  <tr className="address">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">
                        地址&nbsp;&nbsp;
                        <span className="table-label">必填</span>
                      </div>
                      <div className="col-1"></div>
                      <div className="col-3">
                        <p>縣市</p>
                        <p>區/鄉/鎮</p>
                        <p>郵遞區號</p>
                      </div>
                      <div className="col-6">
                        <Address style={{ textAlign: 'left', textIndent: 0 }} />
                      </div>
                      <div className="col-12"></div>
                      <div className="col-1"></div>
                      <input
                        type="text"
                        style={{ height: '6em', width: '80%' }}
                      />
                    </div>
                  </tr>
                  <tr className="lastRow"></tr>
                </tbody>
              </table>
            </div>
          </form>
          <div className="row buttonMobile">
            <div className="col-1"></div>
            <div className="col-5">
              <NavLink
                to="/Account"
                className="nav-link"
                activeClassName="active"
              >
                <img src={require('../images/cancel2.svg')} alt="cancel2" />
              </NavLink>
            </div>
            <div className="col-5">
              <NavLink
                to="/Account"
                className="nav-link"
                activeClassName="active"
              >
                <img src={require('../images/save2.svg')} alt="save2" />
              </NavLink>
            </div>
          </div>
          {/* -----------------------Mobile-------------------------- */}

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
                      <button className="text-center avatar">選擇圖像</button>
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
                        <span className="table-label">必填</span>
                      </div>
                      <div className="col-1"></div>
                      <div className="col-8 ">
                        <input className="nickName" type="text" />
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11">性別</div>
                      <div className="col-1"></div>
                      <div className="col-6">
                        <select style={{ color: '#656765' }}>
                          <option selected disabled>
                            請選擇
                          </option>
                          <option>男</option>
                          <option>女</option>
                        </select>
                      </div>
                    </div>
                  </tr>
                  <tr className="bBorder">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">生日</div>
                      <div className="col-1"></div>
                      <div className="col">
                        <input
                          style={{ color: '#656765' }}
                          placeholder=""
                          type="date"
                          name="dateofbirth"
                          id="dateofbirth"
                        />
                      </div>
                    </div>
                  </tr>

                  <tr className="bBorder">
                    <div className="row accountRow2">
                      <div className="col-1"></div>
                      <div className="col-11">
                        手機&nbsp;&nbsp;
                        <span className="table-label">必填</span>
                      </div>
                      <div className="col-1"></div>
                      <div className="col-8">
                        <input type="text" className="cellphone" />
                      </div>
                    </div>
                  </tr>

                  <tr className="address">
                    <div className="row accountRow">
                      <div className="col-1"></div>
                      <div className="col-11">
                        地址&nbsp;&nbsp;
                        <span className="table-label">必填</span>
                      </div>
                      <div className="col-1"></div>
                      <div className="col-3">
                        <p>縣市</p>
                        <p>區/鄉/鎮</p>
                        <p>郵遞區號</p>
                      </div>
                      <div className="col-4">
                        <Address />
                      </div>
                      <div className="col-12"></div>
                      <div className="col-1"></div>
                      <div className="col-10">
                        <input type="text" style={{ height: '6em' }} />
                      </div>
                    </div>
                  </tr>
                  <tr className="lastRow"></tr>
                </tbody>
              </table>
            </div>
          </form>
          <div className="row button">
            <div className="col-6">
              <NavLink
                to="/Account"
                className="nav-link"
                activeClassName="active"
              >
                <img src={require('../images/cancel.svg')} alt="cancel" />
              </NavLink>
            </div>
            <div className="col-6">
              <NavLink
                to="/Account"
                className="nav-link"
                activeClassName="active"
              >
                <img src={require('../images/save.svg')} alt="save" />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-3 sideBar"></div>
      </div>
      <Top />
    </>
  );
}

export default withRouter(EditAccount);
