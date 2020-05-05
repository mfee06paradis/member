import React, { useState } from 'react';
import Top from '../components/Top';
import SideBar from '../components/SideBar';
import AnimatedVisibility from '../components/AnimatedVisibility';
import '../styles/member.scss';
import { withRouter } from 'react-router-dom';

function CreditCard(props) {
  const [visible, setVisible] = useState(true);
  function ShowMe() {
    setVisible(true);
  }
  function hideMe() {
    setVisible(false);
  }

  const checkCardNumber = function () {
    let x = document.getElementById('cardNumber').value;
    if (x.charAt(0) === '4') {
      document.getElementById('visa').style.display = 'block';
    } else if (
      x.substring(0, 2) === '51' ||
      x.substring(0, 2) === '52' ||
      x.substring(0, 2) === '53' ||
      x.substring(0, 2) === '54' ||
      x.substring(0, 2) === '55'
    ) {
      document.getElementById('mastercard').style.display = 'block';
    }
    if (!x) {
      document.getElementById('visa').style.display = 'none';
      document.getElementById('mastercard').style.display = 'none';
    }
  };
  const createM = function () {
    if (!document.getElementById('month')) {
      for (let i = 1; i <= 12; i++) {
        let x = document.createElement('OPTION');
        x.setAttribute('id', 'month');
        let t = document.createTextNode(i + '月');
        x.appendChild(t);
        document.getElementById('monthSelect').appendChild(x);
      }
    }
  };

  const createY = function () {
    if (!document.getElementById('year')) {
      for (let i = 2020; i <= 2050; i++) {
        let x = document.createElement('OPTION');
        x.setAttribute('id', 'year');
        let t = document.createTextNode(i + '年');
        x.appendChild(t);
        document.getElementById('yearSelect').appendChild(x);
      }
    }
  };
  return (
    <>
      <div className="row bg-white">
        <SideBar />
        <div className="col mainCotent">
          <div>
            <img
              src={require('../images/creditCardtitle.svg')}
              alt="creditCardtitle"
            />
          </div>
          <div className="row creditCardBlank2">
            <div className="col-lg-4"></div>
            <div className="col-lg-3" onClick={ShowMe}>
              <img
                className="nav-link"
                activeClassName="active"
                src={require('../images/addCard.svg')}
                alt="addCard"
                style={{ cursor: 'copy' }}
              />
            </div>
          </div>

          <div className="col-1"></div>
          <div className="col-6 lastpage">
            <img
              onClick={() => {
                props.history.goBack();
              }}
              src={require('../images/lastpage.svg')}
              alt="lastpage"
              className="nav-link"
              activeClassName="active"
            />
          </div>
          <div className="row creditCardBlank" style={{ display: 'none' }}>
            <div className="col-4" onClick={ShowMe}>
              <img
                className="nav-link"
                activeClassName="active"
                src={require('../images/addCard.svg')}
                alt="addCard"
                style={{ cursor: 'copy' }}
              />
            </div>
          </div>
          <AnimatedVisibility
            visible={visible}
            animationIn="zoomIn"
            animationOut="zoomOut"
          >
            <div className="row">
              <div
                className="col-2 creditCardBlank"
                style={{ display: 'none' }}
              ></div>
              <div className="creditCardCotent col-lg-12 col-8 row container">
                <div className="col-12 creditCardBlank2"></div>
                <div className="col-5 logo"></div>
                <div className="col-lg-1 col-12"></div>
                <div
                  className="col-1 creditCardBlank"
                  style={{ display: 'none' }}
                ></div>
                <div
                  className="col-lg-5 col-4"
                  id="mastercard"
                  style={{ display: 'none' }}
                >
                  <img src={require('../images/mastercard.png')} alt="visa" />
                </div>
                <div
                  className="col-lg-5 col-4"
                  id="visa"
                  style={{ display: 'none' }}
                >
                  <img src={require('../images/visa.png')} alt="visa" />
                </div>

                <div className="creditCardBlank2">&nbsp;</div>
                <div className="creditCardBlank2">&nbsp;</div>

                <div className="col-lg-8 col-12 creditCardText">
                  <input
                    onChange={checkCardNumber}
                    id="cardNumber"
                    className="cardCotent"
                    type="text"
                    placeholder="卡號 ---- ---- ---- ----"
                  />
                </div>
                <div className="col-lg-4 col-12 creditCardText">
                  <input
                    className="cardCotent"
                    type="text"
                    placeholder="安全碼"
                  />
                </div>
                <div className="col-lg-6 col-12 creditCardText">
                  <input
                    className="cardCotent"
                    type="text"
                    placeholder="姓名"
                  />
                </div>
                <div className="col-lg-3 col-6 creditCardText">
                  <select
                    className="monthSelect"
                    id="monthSelect"
                    onClick={createM}
                  >
                    <option selected disabled>
                      到期月份
                    </option>
                  </select>
                </div>
                <div className="col-lg-3 col-6 creditCardText">
                  <select
                    className="monthSelect"
                    id="yearSelect"
                    onClick={createY}
                  >
                    <option selected disabled>
                      到期年份
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row creditCardButton">
              <div className="col-6" onClick={hideMe}>
                <img
                  className="nav-link"
                  activeClassName="active"
                  src={require('../images/cancel.svg')}
                  alt="cancel"
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className="col-6" onClick={hideMe}>
                <img
                  src={require('../images/savecard.svg')}
                  alt="savecard"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>

            <div className="row buttonMobile">
              <div className="col-1"></div>
              <div className="col-5" onClick={hideMe}>
                <img
                  className="nav-link"
                  activeClassName="active"
                  src={require('../images/cancel2.svg')}
                  alt="cancel"
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className="col-5" onClick={hideMe}>
                <img
                  className="nav-link"
                  activeClassName="active"
                  src={require('../images/savecard2.svg')}
                  alt="savecard"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
          </AnimatedVisibility>
        </div>
        <div className="col-3 sideBar"></div>
      </div>
      <Top />
    </>
  );
}

export default withRouter(CreditCard);
