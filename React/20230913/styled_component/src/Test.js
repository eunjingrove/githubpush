import React from 'react'
import styled from 'styled-components'

const CardDiv = styled.div`
    padding: 20px;
    text-align: center;
    border: 1px solid #c4c4c4;
    border-radius: 20px;
    width: ${(props) => (props.className === 'setting' ? '200px' : '400px')};
`

const Card = (props) => {
    return (
        <CardDiv className={props.className}>
            <h3>{props.title}</h3>
            <hr />
            <div>{props.children}</div>
        </CardDiv>
    )
}

const SettingCard = () => {
    return (
        <>
            <button>초기화</button>
            <button>저장하기</button>
        </>
    )
}

const ShareCard = () => {
    return (
        <>
            <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
            </p>
            <div>
                <button>이미지 저장하기</button>
                <button>트위터</button>
                <button>페이스북</button>
            </div>
        </>
    )
}

function Test() {
    return (
        <>
            <Card className='setting' title='챌린지 설정'>
                <SettingCard />
            </Card>
            <Card className='share' title='서비스 공유하기'>
                <ShareCard />
            </Card>
        </>
    )
}



export default Test