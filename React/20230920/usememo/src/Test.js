import React, { createContext, useContext } from 'react'

const UserInfo = createContext({ name: 'eunjin', id: '대장오소리' })

function HelloLicatTwo() {

  return (
    <UserInfo.Consumer>
      {(value) => (
        <>
          <h2>{value.id}</h2>
          <strong>{value.name}</strong>
        </>
      )}
    </UserInfo.Consumer>
  )
}

function HelloLicat() {
  const { name, id } = useContext(UserInfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{id}</strong>
    </div>
  )
}

function Test() {
  return (
    <HelloLicat />
  )
}

export default Test