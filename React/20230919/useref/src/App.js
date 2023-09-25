import React, { useState, useRef } from 'react'

function App() {
  const emailInput = useRef(null);
  const pwInput = useRef(null);

  const [emailValue, setEmailValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const inputCheck = (e) => {
    e.preventDefault();
    setEmailValue(emailInput.current.value);
    setPwValue(pwInput.current.value);

    if (emailInput.current.value === '') {
      alert('이메일을 입력해라')
      emailInput.current.focus()
    }
  }

  return (
    <>
      <form onSubmit={inputCheck} >
        <label> 이메일 :
          <input type='email' ref={emailInput} />
        </label>
        <label> 비밀번호 :
          <input type='password' ref={pwInput} />
        </label>
        <button>로그인</button>
      </form>
      <span>이메일: {emailValue}</span>
      <span>비밀번호: {pwValue} </span>
    </>

  )
}

export default App