import React from 'react';

import HelloWorldFunc from '../src/components/HelloWorldFunc';
import HelloWorldClass from '../src/components/HelloWorldClass';
import HelloWorldText from '../src/components/HelloWorldText';
import SelectBox from '../src/components/SelectBox';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textNow: '',
    };
  }

  // 為了要綁定this值，用類似箭頭函式的寫法
  // 專門設計給子女元件，送資料到父母元件
  sendDataToMe = (value) => {
    this.setState({ textNow: value });
  };

  render() {
    return (
      <>
        <SelectBox />
        <h1>父元件</h1>
        <input value={this.state.textNow} />
        {/* props傳出函式給子元件 */}
        <HelloWorldClass sendMe={this.sendDataToMe} />
        <HelloWorldFunc sendMe={this.sendDataToMe} />
        <HelloWorldText sendMe={this.state.textNow} />
      </>
    );
  }
}

//單向資料流: 父元件傳遞props給子元件, props本身為物件

// function App() {
//   return (
//     <>
//       <HelloWorldFunc text="" total={1} />
//       <HelloWorldClass text="晚上好" total={2}/>
//     </>
//   );
// }

export default App;
