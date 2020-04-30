import React, { useState } from 'react';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  if (props.isAuth) {
    return (
      <button
        onClick={() => {
          props.setAuth(false);
        }}
        type="submit"
        className="btn btn-success"
      >
        登出
      </button>
    );
  }
  return (
    <>
      {/* 
        1. 單一行的結尾必須要是/> (註：通常是input標記)
        2. class要換成className (註：用className=全部取代class=)
        3. for要換成htmlFor (註：用htmlFor=全部取代for=)
        4. style要變成js的物件值(雙花括號)
        5. JSX語法裡不能使用HTML的註解，例如：<!--nav-collapse --> 
        */}
      <div className="container">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className={
              emailMessage ? 'form-control is-invalid' : 'form-control'
            }
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {emailMessage ? (
            <div className="invalid-feedback">{emailMessage}</div>
          ) : (
            ''
          )}
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className={
              passwordMessage ? 'form-control is-invalid' : 'form-control'
            }
            id="exampleInputPassword1"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          {passwordMessage ? (
            <div className="invalid-feedback"> {passwordMessage} </div>
          ) : (
            ''
          )}
        </div>

        <div className="form-group form-check"></div>
        <button
          onClick={() => {
            let correct = true;

            if (!email) {
              setEmailMessage('請輸入email');
              correct = false;
            } else {
              setEmailMessage('');
            }
            if (!password) {
              setPasswordMessage('請輸入password');
              correct = false;
            } else {
              setPasswordMessage('');
            }

            if (email && email !== '123') {
              setEmailMessage('無此email');
              correct = false;
            }

            if (password && password.length < 4) {
              setPasswordMessage('password需大於4個字元');
              correct = false;
            }

            if (correct) {
              props.setAuth(true);
            }
          }}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default LoginForm;
