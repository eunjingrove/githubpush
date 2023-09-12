import React, { useState } from 'react'
import Review from './components/Review'
import Detail from './components/Detail'
import Question from './components/Question'

const ContentsContainer = ({ list }) => {
    if (list === 'detail') {
        return <Detail />
    } else if (list === 'review') {
        return <Review />
    } else if (list === 'qa') {
        return <Question />
    }
}

const NavBar = () => {
    const [list, setList] = useState('detail');

    function checkId(event) {
        setList(event.target.id)
    }

    return (
        <>
            <nav>
                <ul>
                    <li id='detail' style={list === 'detail' ? { color: 'red' } : { color: 'black' }} onClick={checkId}>Detail</li>
                    <li id='review' style={list === 'review' ? { color: 'red' } : { color: 'black' }} onClick={checkId}>Review</li>
                    <li id='qa' style={list === 'qa' ? { color: 'red' } : { color: 'black' }} onClick={checkId}>Question</li>
                </ul>
            </nav>
            <ContentsContainer list={list} />
        </>
    )
}

export default function App6() {
    return (
        <NavBar />
    )
}
