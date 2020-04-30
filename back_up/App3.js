import React from 'react';

import LifeCycleFunc from '../src/components/LifeCycleFunc';

class App3 extends React.Component {
  constructor() {
    super();
    this.state = { isShow: true };
  }

  render() {
    return (
      <>
        {this.state.isShow ? <LifeCycleFunc /> : <h1>沒子元件</h1>}
        <button
          onClick={() => {
            this.setState({ isShow: false });
          }}
        >
          刪除
        </button>
        <button
          onClick={() => {
            this.setState({ isShow: true });
          }}
        >
          呈現
        </button>
      </>
    );
  }
}

export default App3;
