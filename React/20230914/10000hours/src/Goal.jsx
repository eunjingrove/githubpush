import React from 'react'
import { useState } from 'react'

const Goal = ({ setTobecome, setDay }) => {
    const [pro, setPro] = useState('');
    const [time, setTime] = useState('');
    function handleClickSubmit(event) {
        event.preventDefault();
        if (pro === '') {
            alert('당신이 되고 싶은 전문가를 입력해주세요!')
        } else if (time === '') {
            alert('훈련 시간을 입력해주세요.')
        }
        if (pro && time) {
            setTobecome(pro);
            setDay(Math.floor(10000 / time));
            setPro('');
            setTime('');
        }

    }
    return (
        <form onSubmit={handleClickSubmit}>
            <span>나는 </span>
            <input type='text' value={pro} onChange={(event) => setPro(event.target.value)}></input>
            <span> 전문가가 될 것이다.</span><br />
            <span>그래서 앞으로 매일 하루에 </span>
            <input type='number' value={time} onChange={(event) => setTime(event.target.value)}></input>
            <span> 시간씩 훈련할 것이다.</span><br />
            <button>나는 며칠동안 훈련해야 1만 시간이 될까?</button>
        </form>
    )
}
export default Goal