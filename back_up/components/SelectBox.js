import React from 'react';

class SelectBox extends React.Component {
  constructor() {
    super();
    this.state = { value: '' }; //接收選擇時, 所選擇的值: 星期一, 星期三, 星期日
  }

  handleChange = (e) => {
    //由於setState有異步的特性, 所以需要使用以下的方法, 才能同步取出所選擇的值:

    // 1. 使用變數: 先定義對最後的結果(預測會有什麼值)
    // let lastValue = this.state.value;
    // lastValue = e.target.value;
    // this.setState({ value: lastValue });
    // console.log(lastValue);

    // 2. 利用第二個傳入參數，真正更新完才能得到更新過的值, 此方法只有類別型元件可以使用
    // setState(updater, [callback]);
    // 當狀態改變完成之後, 才會呼叫callback function, 故能夠得到已經更新完的值
    this.setState({ value: e.target.value }, () => {
      console.log(this.state.value);
    });
  };

  //3. 使用componentDidUpdate的生命週期方法
  componentDidUpdate() {
    console.log('componentDidUpdate時(this.state.value)', this.state.value);
  }

  render() {
    return (
      <div>
        {/* 選擇時, 將所選擇的值傳給this.state */}
        <select onChange={this.handleChange} value={this.state.value}>
          <option value="星期一" key={1}>
            星期一
          </option>
          <option value="星期三" key={2}>
            星期三
          </option>
          <option value="星期日" key={3}>
            星期日
          </option>
        </select>
        <h1>{this.state.value}</h1>
      </div>
    );
  }
}

export default SelectBox;
