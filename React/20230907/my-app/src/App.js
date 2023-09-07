import './App.css';

function App() {
  const name = '라이켓';
  function 함수() {
    return '함수';
  }
  const someStyle = { backgroundColor: "yellow", color: "white" };
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const today = now.getDate();
  const time = now.getHours() + '시 ' + now.getMinutes() + '분 ' + now.getSeconds() + '초';

  return (
    <div>
      <h1 className="h1">안녕 {함수() ? '함수' : 'JSX'}!</h1>
      <h1 className='newClass'>안녕 라이켓!</h1>
      <input type="text" style={{ backgroundColor: "red" }} />

      <div style={{ backgroundColor: 'black' }}>
        <p style={{ color: 'orangeRed' }}>년: {year}</p>
        <p style={{ color: 'white' }}>월/일: {month}/{today}</p>
        <p style={{ color: 'white' }}>시간: {time}</p>
      </div>

    </div>
  );
}

export default App;