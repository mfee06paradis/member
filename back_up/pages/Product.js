import React from 'react';
import Banner from '../components/Banner';
import { withRouter, Redirect, useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

function Product(props) {
  //利用props中的location search得到搜尋字串
  console.log(props.location.search);

  //用document.location.search得到搜尋字串
  console.log(document.location.search);

  // 產生一個新的URLSearchParams實例, queryString
  const searchParams = new URLSearchParams(props.location.search);

  // 未登入的狀態，就導向註冊or登入頁面
  // if (props.login === false) return <Redirect to="/Register" />;

  //注意：params必定是字串類型
  let { id, type } = useParams(); //物件的解構賦值

  // if (!id) {
  //   return (
  //     <>
  //       <Banner pagename="產品" />
  //       <h1>找不到產品id</h1>
  //     </>
  //   );
  // }

  const findProduct = <h2>目前的產品編號為:{id}</h2>;
  const noProduct = <h2>找不到產品id</h2>;
  const findType = <h2>目前的產品分類為:{type}</h2>;
  const noType = <h2>找不到產品分類</h2>;

  return (
    <>
      <Banner pagename="產品" />

      <Breadcrumb />
      {/* <h2>目前的產品編號為:{props.match.params.id}</h2> */}

      {/* {id ? findProduct : noProduct}
      {type ? findType : noType} */}

      {/* 用get來得到每個搜尋字屬的參數 */}
      <h1>目前會員登入狀態:{props.login ? '登入中' : '未登入'}</h1>
      <h2>id: {searchParams.get('id')}</h2>
      <h2>type: {searchParams.get('type')}</h2>
    </>
  );
}

export default withRouter(Product);
