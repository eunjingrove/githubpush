import React from 'react';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { count } from './store';

function App() {
  const state = useRecoilValue(count);
  return (
    <div>
      {state}
      <App2 />
    </div>
  );
}

function App2() {
  return <App3 />;
}

function App3() {
  return <App4 />;
}

function App4() {
  const setState = useSetRecoilState(count);
  return (
    <>
      <button onClick={() => setState((prevState) => prevState + 1)}>증가</button>
    </>
  );
}
