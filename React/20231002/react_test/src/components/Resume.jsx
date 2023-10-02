import React from 'react'
import { useState } from 'react';

function Resume(props) {
    const [like, setLike] = useState('')

    function clickLike() {
        like === '' ? setLike('like') : setLike('');

    }

    const myColor = props.color;
    const styleColor = { color: myColor };

    return (
        <div style={{ border: 'solid 1px', width: '500px' }}>
            <h1>{props.name} 자기소개서</h1>
            <h2>{props.hello}</h2>
            <h2>취미 : {props.hobby}</h2>
            <h2>좋아하는 음식 : {props.food}</h2>
            <h2>좋아하는 색 : <span style={styleColor}>myColor</span></h2>
            <button onClick={clickLike}>like </button><span>{like}</span>
        </div>
    )
}

export default Resume