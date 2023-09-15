import React from 'react'
import styled from 'styled-components'

const ContentDiv = styled.div`
    padding: 20px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    margin-bottom: 10px;
    width: ${(props) => (props.className === "setting" ? "200px" : "400px")};
`

const ButtonOne = () => {
    return (
        <>
            <button type='button'>초기화</button>
            <button type='button'>저장하기</button>
        </>
    )
}

const ButtonTwo = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
                eveniet, laudantium, deleniti autem sequi molestias magni quia, aliquam
                et praesentium nostrum dolores culpa cupiditate unde doloremque labore
                beatae accusamus.
            </p>
            <button type='button'>이미지 저장</button>
            <button type='button'>트위터</button>
            <button type='button'>페이스북</button>
        </>
    )
}

const Card = (props) => {
    return (
        <>
            <ContentDiv className={props.className}>
                <h2>{props.title}</h2>
                <hr />
                <div>
                    {props.children}
                </div>
            </ContentDiv>

        </>
    )
}


function App9() {
    return (
        <>
            <Card className="setting" title='챌린지 설정'>
                <ButtonOne />
            </Card>
            <Card className='share' title='서비스 공유하기'>
                <ButtonTwo />
            </Card>
        </>
    )
}

export default App9