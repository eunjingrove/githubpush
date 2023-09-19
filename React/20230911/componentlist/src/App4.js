import React, { useState } from 'react'

function Detail() {
    return (
        <>
            <h1>상세정보</h1>
            <p> 좋습니다 !! 사세요 !!

            </p>
        </>
    )
}

function Review() {
    return (
        <>
            <h1>리뷰</h1>
            <p>별점 5개

            </p>
        </>
    )
}

function Question() {
    return (
        <>
            <h1>?</h1>
            <p>질문받습니다 ~!

            </p>
        </>
    )
}

function Display({ display }) {
    if (display === 'detail') {
        return <Detail />
    } else if (display === 'qa') {
        return <Question />
    } else {
        return <Review />
    }
}

function InfoList({ display, setDisplay }) {
    function clickLi(e) {
        if (e.target.id === 'detail') {
            setDisplay('detail')
        } else if (e.target.id === 'qa') {
            setDisplay('qa')
        } else {
            setDisplay('review')
        }
    }

    return (
        <>
            <li><button style={display === 'detail' ? { color: 'red' } : { color: 'black' }} onClick={clickLi} id='detail'>상세정보</button></li>
            <li><button style={display === 'qa' ? { color: 'red' } : { color: 'black' }} onClick={clickLi} id='qa'>Q&A</button></li>
            <li><button style={display === 'review' ? { color: 'red' } : { color: 'black' }} onClick={clickLi} id='review'>Review</button></li>
        </>
    )
}

function InfoCategory({ display, setDisplay }) {
    return (
        <ul>
            <InfoList setDisplay={setDisplay} display={display} />
        </ul>
    )
}

function App4() {
    const [display, setDisplay] = useState('detail');
    return (
        <div>
            <InfoCategory display={display} setDisplay={setDisplay} />
            <Display display={display} />
        </div>
    )
}

export default App4