import React from 'react';
import SideBar from '../components/SideBar';
import Top from '../components/Top';
import Address from '../components/Address';

function EditAccount() {
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
              <img src={require('../images/lastpage.svg')} alt="lastpage" />
            </div>
          </div>

          <form action="" className="row MobileEditcontent">
            <div className="accountCotent col-8 container table-bg">
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
                        <span className="necessaryItem">必填</span>
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
                        <span className="necessaryItem">必填</span>
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
                        <span className="necessaryItem">必填</span>
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
              <img src={require('../images/cancel2.svg')} alt="cancel2" />
            </div>
            <div className="col-5">
              <img src={require('../images/save2.svg')} alt="save2" />
            </div>
          </div>

          <form action="" className="row content">
            <div className="accountCotent col-lg-12 container table-bg">
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
                        <span className="necessaryItem">必填</span>
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
                        <span className="necessaryItem">必填</span>
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
                        <span className="necessaryItem">必填</span>
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
          <div className="row button">
            <div className="col-6">
              <img src={require('../images/cancel.svg')} alt="cancel" />
            </div>
            <div className="col-6">
              <img src={require('../images/save.svg')} alt="save" />
            </div>
          </div>
        </div>
        <div className="col-3 sideBar"></div>
      </div>
      <Top />
    </>
  );
}

export default EditAccount;
