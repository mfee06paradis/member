import React, {useState} from 'react';
// import PropTypes from 'prop-types'

function HelloWorldFunc(props) {
  const [inputText, setInputText] = useState('')
//   console.log(props);
  return (
    <>
      <h1>函式型元件</h1>
      <input 
        type="text" 
        value= {inputText}
        onChange={(event)=> setInputText(event.target.value)}
        />
        <button
          onClick = {()=>{
          props.sendMe(inputText)
        }}
        >
        送資料到App(父元件)
        </button>
    </>
  );
}

//限制props類型,or 必要
// HelloWorldFunc.propTypes = {
//   text: PropTypes.string.isRequired,
//   total: PropTypes.number.isRequired,
// }

//設定預設的props值
// HelloWorldFunc.defaultProps = {
//   text : '很好', 
//   total: 1
// }

export default HelloWorldFunc;
