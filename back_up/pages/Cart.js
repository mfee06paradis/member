import React, { useState, useEffect } from 'react';

function Cart() {
  const [dataLoading, setDataLoading] = useState(false);
  const [mycart, setMycart] = useState([]);
  const [mycartDisplay, setMycartDisplay] = useState([]);

  function getCartFromLocalStorage() {
    // 開啟載入指示
    setDataLoading(true);
    const newCart = localStorage.getItem('cart') || [];
    console.log(JSON.parse(newCart));
    // 設定資料
    setMycart(JSON.parse(newCart));
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getCartFromLocalStorage();
  }, []);

  //每次mycart資料有變動就會開始0.5秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false);
    }, 500);

    let newMycartDisplay = [];

    for (let i = 0; i < mycart.length; i++) {
      // findIndex() 方法將依據提供的測試函式，尋找陣列中符合的元素，並返回其 index（索引）。如果沒有符合的對象，將返回 -1 。
      //在mycartDisplay中搜尋有沒有id === mycart[i].id

      const index = newMycartDisplay.findIndex(
        (newMycartDisplay) => newMycartDisplay.id === mycart[i].id
      );
      console.log(newMycartDisplay);
      //若有, 則找到之後會返回陣列元素的索引值
      if (index !== -1) {
        console.log('findindex', index);
        newMycartDisplay[index].amount += mycart[i].amount;

        //若無, 則會返回 -1
      } else {
        const newItem = { ...mycart[i] };
        // newItem =
        // {id: 1, name: "iphone x", amount: 1, price: 15000}
        // {id: 2, name: "ipad", amount: 1, price: 20000}
        // {id: 1, name: "iphone x", amount: 1, price: 15000}
        // {id: 3, name: "book", amount: 1, price: 200}

        // 擴展運算子（Spread Operator）:
        // 以 ... 表示，將陣列展開成個別數值，可以想像是展示（展示這個陣列的所有元素）的功能。
        // let list = ['apple', 'boy', 'cat'];
        // console.log(...list); // apple boy cat

        newMycartDisplay = [...newMycartDisplay, newItem];
      }
    }

    setMycartDisplay(newMycartDisplay);
    console.log('newMycartDisplay', newMycartDisplay);
  }, [mycart]);

  // 計算總價用的函式

  function sum(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price;
    }
    return total;
  }

  const spinner = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );

  const display = (
    <>
      <ul className="list-group">
        {mycartDisplay.map((value, index) => {
          {
            /* 這邊的value跟index為mycartDisplay中的value與index 
        map() 方法會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。 
        map(function callback( value[, index[, array]]) 
        value:原陣列目前所迭代處理中的元素。
        index(選擇性):原陣列目前所迭代處理中的元素之索引。
        array(選擇性):呼叫 map 方法的陣列。  */
          }

          return (
            <li key={index} className="list-group-item">
              {/* //若使用了map方法, 則需要加上key值 */}
              產品：{value.name}/數量：{value.amount}/單價：{value.price}/
              {'   '}
              小計：{value.amount * value.price}
            </li>
          );
        })}
      </ul>
      {/* 判斷mycartDisplay是否在初次render的階段 */}
      {mycartDisplay.length > 0 ? <h3>總價：{sum(mycartDisplay)}</h3> : ''}
    </>
  );

  return (
    <>
      <div className="container">{dataLoading ? spinner : display}</div>
    </>
  );
}

export default Cart;
