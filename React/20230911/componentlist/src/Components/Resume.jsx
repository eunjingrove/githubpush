import React, { useState } from 'react';

function Resume(props) {

    // let like = 0;
    // 리액트는 like를 그저 변수로 여기기 때문에 컴포넌트를 다시 랜더링하지 않는다. 
    // console.log("useState: ", useState(0));
    let [like, setLike] = useState(''); // useState(0)은 like의 초기값

    // function clickLike() {
    //     setLike(like + 1); // 이 값이 곧 like += 1 과 같다. 
    //     console.log(like);
    // }

    function clickLike() {
        if (like === 'like') {
            setLike('');
        } else {
            setLike('like');
        }
    }

    return (
        <div style={{ border: "1px solid #000" }}>
            <h1>{props.name} 자기소개서</h1>
            <h2>{props.hello}</h2>
            <h3>취미: {props.hobby}</h3>
            <p>좋아하는 음식: {props.food}</p>
            <p>좋아하는 색 : <span style={{ color: props.color }}>{props.color}</span></p>
            <button onClick={clickLike}>like</button><span>{like}</span>
        </div>
    )
}

export default Resume;