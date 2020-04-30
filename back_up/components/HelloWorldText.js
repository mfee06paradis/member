import React from 'react';

function HelloWorldText(props) {
  return (
    <>
      <h1>HelloWorldText</h1>
      <input value={props.sendMe}></input>
      {/* 得到的props是一物件, 需要給key才能傳出其值 */}
    </>
  );
}

export default HelloWorldText;
