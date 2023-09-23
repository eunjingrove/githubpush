import React, { createContext, useContext } from 'react'

const UserInfo = createContext({ name: '은진', id: '4시다' })

function Test() {
  return (

    <HelloLicat />

  )
}

const HelloLicat = () => {
  const { name, id } = useContext(UserInfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{id}</strong>
    </div>
  );
};
export default Test