import React from 'react';
import $ from 'jquery';

class JqueryComClass extends React.Component {
  constructor() {
    super();
    this.state = {
      messageHide: '動畫結束，隱藏',
      messageShow: '動畫結束，呈現',
      total: 0,
    };
  }
  //jquerY只能掛載生命週期裡面
  componentDidMount() {
    //由於callback function中的this值會指向不同的物件, 故需先做成壁包, 才能使用
    const messageHide = this.state.messageHide;
    const messageShow = this.state.messageShow;
    const changeState = (value) => {
      this.setState({ total: value });
    };

    //jquery的程式碼需要寫在這裡，確保dom元素已經出現在網頁上
    $('#clickme').click(function () {
      $('#book').hide('slow', function () {
        alert(messageHide);
        //設定state值
        changeState(999);
      });
    });

    $('#clickme2').click(function () {
      $('#book').show('slow', function () {
        alert(messageShow);
        //設定state值
        changeState(0);
      });
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <button id="clickme">點我隱藏</button>
        <br></br>
        <button id="clickme2">點我顯示</button>
        <br></br>
        <br></br>
        <img
          id="book"
          src="https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/F01/168/81/F011688130.jpg&v=5dc27e63&w=250&h=250"
          alt=""
          width="100"
          height="123"
        ></img>
      </>
    );
  }
}

export default JqueryComClass;
