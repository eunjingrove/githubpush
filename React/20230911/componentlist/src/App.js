import Hello from "./Components/Hello";
import HelloProps from "./Components/HelloProps";
import Time from "./Components/Time";
import Resume from "./Components/Resume";
import ColorText from "./Components/ColorText";
import MenuList from "./MenuList/MenuList";
import DisplayMood from "./DisplayMood/DisplayMood";
import { useState } from "react";

function App() {

  const [currentMood, setCurrentMood] = useState(""); // useState('') -> currentMood의 초기값이 ''이라는 것  

  return (
    <div>
      <Hello name="gary" />
      <Time />
      <HelloProps name="jaehyun" age={15} someFunc={() => 'awesome!!!'} someJSX={<img src="https://picsum.photos/id/237/200/300" />} someArr={[1, 2, 3, 4]} someObj={{ one: 1 }} />
      <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue" />
      <ColorText color="red" />
      <ColorText color="green" />
      <ColorText color="blue" />
      <h1>오늘의 기분을 선택해 주세요 😄</h1>
      <div>
        <MenuList setCurrentMood={setCurrentMood} />
        <DisplayMood mood={currentMood} />
      </div>
    </div>
  );
}

export default App;
