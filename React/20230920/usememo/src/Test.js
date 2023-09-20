import React, { useState, useRef } from 'react'
import { useMemo } from 'react';

function Test() {
  const inputName = useRef(null)
  const inputId = useRef(null)

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [userInfo, setUserInfo] = useState([]);

  function handleInputName(e) {
    setName(e.target.value);
    console.log('렌더링 🍓')
  }

  function handleInputId(e) {
    setId(e.target.value);
    console.log('렌더링 🍋')
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newInfo = [...userInfo, { name: name, id: id }]
    inputName.current.value = "";
    inputId.current.value = "";
    inputName.current.focus()
    setUserInfo(newInfo);

  }

  const result = useMemo(() => {
    return getNum(userInfo)
  }, [userInfo])

  function getNum(userInfo) {
    console.log('렌더링 🍒')
    return userInfo.length;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInputName} ref={inputName} />
        <input type='text' onChange={handleInputId} ref={inputId} />
        <button type='submit'>추가하기</button>
      </form>
      <ul>
        {userInfo.map((info, index) => {
          return (
            <li key={index}>
              <span> 이름 : {info.name}</span>
              <strong> 아이디 : {info.id}</strong>
            </li>

          )
        })}
      </ul>
      <span>번호 : {result}</span>
    </>
  )
}

export default Test