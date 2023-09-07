import './App.css'

function App() {
  const name = '라이켓';
  function 함수() {
    return '함수';
  }

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const time = now.getHours() + '시 ' + now.getMinutes() + '분 ' + now.getSeconds() + '초'


  return (
    <div class='today'>
      <p class='year'>년: {year}</p>
      <p>월/일: {month}/{day}</p>
      <p>시간: {time}</p>
    </div>
  )
}

export default App;