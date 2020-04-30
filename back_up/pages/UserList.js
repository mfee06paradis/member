import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
// MdAddCircle MdModeEdit MdDelete
import { MdAddCircle, MdModeEdit, MdDelete } from 'react-icons/md';

function UserList(props) {
  const [users, setUsers] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  async function getUsersFromServer() {
    // 開啟載入指示
    setDataLoading(true);

    // 連接的伺服器資料網址
    const url = 'http://localhost:5555/users';

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    });

    const response = await fetch(request);
    const data = await response.json();
    console.log(data);
    // 設定資料
    setUsers(data);
  }

  async function deleteUsersFromServer(userid) {
    // 開啟載入指示
    setDataLoading(true);

    // 連接的伺服器資料網址
    const url = 'http://localhost:5555/users/' + userid;

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'DELETE',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    });

    const response = await fetch(request);
    const data = await response.json();
    console.log(data);

    //data為空資料, 所以id不存在, 因此過濾掉user陣列中的沒有id的value與index
    if (!data.id) {
      const newUsers = users.filter((value, index) => {
        return value.id !== userid;
      });

      setUsers(newUsers);
      //newUsers為沒被刪除的user陣列中剩下的資料
      console.log('newUser', newUsers);
      console.log('data', data);
      alert('刪除完成');
    }
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getUsersFromServer();
  }, []);

  // 每次users資料有變動就會X秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false);
    }, 1000);
  }, [users]);

  const loading = (
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
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">姓名</th>
            <th scope="col">帳號</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          {users.map((value, index) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.username}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => {
                      props.history.push('/edit/' + value.id);
                    }}
                  >
                    <MdModeEdit /> 編輯
                  </Button>
                  {'  '}
                  <Button
                    onClick={() => {
                      deleteUsersFromServer(value.id);
                    }}
                    variant="danger"
                  >
                    <MdDelete /> 刪除
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );

  return (
    <>
      <div className="container">
        <h1>會員列表</h1>

        <Button
          onClick={() => {
            props.history.push('/add');
          }}
          variant="info"
        >
          <MdAddCircle /> 新增會員
        </Button>

        <hr />
        {dataLoading ? loading : display}
      </div>
    </>
  );
}

export default withRouter(UserList);
