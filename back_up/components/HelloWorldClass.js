import React from 'react';
// import PropTypes from 'prop-types'

class HelloWorldClass extends React.Component {
  //建構式如果要得到props值, 要用這個方式傳入
  //建構式中, 不需要加上this
  // constructor(props) {
  //   super(props);
  constructor() {
    super();
    this.state = {
      //反樣式: 不要利用傳入props值來初始化自己的狀態值
      // initText: props.text,
      inputText: '',
    };
  }
  render() {
    console.log(this.props);
    return (
      <>
        <h1>類別型元件</h1>
        <input
          type="text"
          value={this.state.inputText} // 將state的值設定給name的value
          onChange={(event) => this.setState({ inputText: event.target.value })}
          //傳入event要取觸發事件的元件  event.target : 永遠指向觸發事件的 DOM 物件
        />
        {/* 利用從父母元件得到的sendMe方法，傳資料給父母 */}
        <button
          onClick={() => {
            this.props.sendMe(this.state.inputText);
          }}
        >
          送資料到App(父元件)
        </button>
      </>
    );
  }
}

//限制props類型,or 必要
// HelloWorldClass.propTypes = {
//   text: PropTypes.string.isRequired,
//   total: PropTypes.number.isRequired,
// }

//設定預設的props值
// HelloWorldClass.defaultProps = {
//   text : '很不好',
//   total: 0
// }

export default HelloWorldClass;
