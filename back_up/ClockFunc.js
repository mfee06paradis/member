import React, { useState, useEffect } from 'react';

function ClockFunc() {
  const [date, setDate] = useState(new Date());

  //取代 componentDidMount 與 componentWillUnmount
  useEffect(() => {
    // componentDidMount要執行的部份
    var timerID = setInterval(() => tick(), 1000);

    // 回傳的的函式裡是componentWillUnmount
    return () => {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
}

export default ClockFunc;
