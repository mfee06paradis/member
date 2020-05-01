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
          <div className="col-6 lastpage">
            <img src={require('../images/lastpage.svg')} alt="lastpage" />
          </div>

          <form action="" className="row MobileEditcontent">
            <div className="accountCotent col-10 container table-bg">
              <table className="editTable">
                <tr>
                  <div className="row editMemberIcon">
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
                <tr>
                  <div className="row accountRow ">
                    <div className="col-1"></div>
                    <div className="col-10">
                      E-mail帳號:
                      <br />
                      <label className="accountText">12345678</label>
                    </div>
                  </div>
                </tr>

                <tr>
                  <div className="row accountRow2">
                    <div className="col-1"></div>
                    <div className="col-9">密碼:</div>
                    <br />
                  </div>
                </tr>

                <tr>
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

                <tr>
                  <div className="row accountRow2">
                    <div className="col-1"></div>
                    <div className="col-11">性別</div>
                    <div className="col-1"></div>
                    <div className="radio col-6">
                      <label className="radio-inline">
                        <input
                          type="radio"
                          name="inlineRadioOptions"
                          value="Male"
                          className="option-input userGender"
                          checked
                        />
                        <span>Male</span>
                      </label>
                      <label className="radio-inline">
                        <input
                          type="radio"
                          name="inlineRadioOptions"
                          value="Female"
                          className="option-input userGender"
                        />
                        <span>Female</span>
                      </label>
                    </div>
                  </div>
                </tr>
                <tr>
                  <div className="row accountRow">
                    <div className="col-1"></div>
                    <div className="col-4">生日</div>
                    <div className="col-4"></div>
                  </div>
                </tr>
                <tr>
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
                <tr>
                  <div className="row address">
                    <div className="col-1"></div>
                    <div className="col-11">
                      地址&nbsp;&nbsp;
                      <span className="necessaryItem">必填</span>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-5">縣市</div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-9">
                      <input type="text addressCotent" />
                    </div>
                  </div>
                  <div className="row" id="lastRow"></div>
                </tr>
              </table>
              <div className="row buttonMobile">
                <div className="col-6">
                  <img src={require('../images/cancel2.svg')} alt="cancel2" />
                </div>
                <div className="col-6">
                  <img src={require('../images/save2.svg')} alt="save2" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-3 sideBar"></div>
      </div>
      <Top />
    </>
  );
}

export default EditAccount;
