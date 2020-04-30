import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  //離開網頁時, 將計時器關掉
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h2>{this.state.date.toLocaleString()}</h2>
      </div>
    );
  }
}

export default Clock;
