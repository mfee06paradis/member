import React from 'react';
import Banner from '../components/Banner';

import { withRouter } from 'react-router-dom';
import { checkPropTypes } from 'prop-types';

function NotFoundPage(props) {
  return (
    <>
      <Banner pagename="頁面不存在" />

      {/* 跳轉到其他頁面 */}
      <button
        onClick={() => {
          props.history.push('/product');
        }}
      >
        到產品頁
      </button>

      {/* 回到上一頁 */}
      <button
        onClick={() => {
          props.history.goBack();
        }}
      >
        回到上一頁
      </button>
    </>
  );
}

export default withRouter(NotFoundPage);
