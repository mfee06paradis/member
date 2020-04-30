// 自訂元件名稱, 開頭英文字母需要大寫

import React from 'react';

// 類別型元件
class Appclass extends React.Component {
  constructor() {
    super();
    //state:狀態
    this.state = { total: 0 }; //total預設為0
  }
  render() {
    //方法
    // 1. 不需要在html中畫出介面 2. 不需要id or calss
    return (
      <>
        <h1> {this.state.total} </h1>
        <button
          onClick={() => {
            this.setState({ total: this.state.total + 1 });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState({ total: this.state.total - 1 });
          }}
        >
          -1
        </button>
      </>
    );
  }
}

export default Appclass;
