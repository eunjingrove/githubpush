import React from 'react'
import styled, { css } from 'styled-components'

const BorderNone = css`border: none;`;
const BorderRadius = css` border-radius: 8px;`;

const Button = styled.button`
    margin: 5px;
    padding: 10px;
    width: 100px;
    color: #fff;
    font-size: 20px;
    text-align: center;
`
// Button 스타일드컴포넌트를 확장! styled(확장하고 싶은 컴포넌트)
const ButtonOne = styled(Button)`
    background-color: darkblue;
`

const ButtonTwo = styled(Button)`
    background-color: darkgray;
    ${BorderRadius}
    ${BorderNone}
`

const ButtonThree = styled(ButtonTwo)`
    background-color: orangered;
    border: 2px solid darksalmon;
`

function App() {
    return (
        <div>
            <ButtonOne>버튼</ButtonOne>
            <ButtonTwo>버튼</ButtonTwo>
            <ButtonThree>버튼</ButtonThree>
        </div>
    );
}

export default App;