// 自訂元件名稱, 開頭英文字母需要大寫

import React, { useState } from 'react';
//useState:勾子

// 函式型元件
function Appfunc() {
  const [total, setTotal] = useState(1); // const [a, b]:名稱需一致, 鉤子內為初始值, 回傳出一個陣列

  function test() {
    let a = 1;
    let b = 2;
    a = a + b;
    console.log(a);
    console.log(b);
  }

  test();
  //<></> : React fragment
  return (
    <>
      <h1> {total} </h1>
      <button
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1);
        }}
      >
        -1
      </button>
    </>
  );
}

export default Appfunc;
