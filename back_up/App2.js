import React from 'react';
import LifeCycle from '../src/components/LifeCycle';

class App2 extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: true,
    };
  }

  render() {
    let display = <LifeCycle />;
    // if (this.state.isShow === false) display = <h2>沒人在</h2>

    return (
      <>
        {/* 用三元表達式來代替if判斷式 */}
        {/* if判斷式不能直接寫入jsx語法中 */}
        {this.state.isShow ? display : <h2>沒人在</h2>}

        {/* 邏輯與-短路求值 if... */}
        {/* {this.state.isShow && display} */}

        <button
          onClick={() => {
            this.setState({ isShow: false });
          }}
        >
          不要你了，再見
        </button>

        <button
          onClick={() => {
            this.setState({ isShow: true });
          }}
        >
          復活
        </button>
      </>
    );
  }
}

export default App2;
