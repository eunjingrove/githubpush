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
        <div>
            <form className='goal-form' onSubmit={handleClickSubmit}>
                <div className='i-will'>
                    <span>나는&nbsp;&nbsp;</span>
                    <input className='goal-input' type='text' value={pro} onChange={(event) => setPro(event.target.value)} placeholder='예)프로그래밍'></input>
                    <span>&nbsp;&nbsp;전문가가 될 것이다.</span>
                </div>
                <div className='training-time'>
                    <span>그래서 앞으로 매일 하루에&nbsp;&nbsp;</span>
                    <input className='goal-input' type='number' value={time} onChange={(event) => setTime(event.target.value)} placeholder='예)5시간'></input>
                    <span>&nbsp; 시간씩 훈련할 것이다.</span>
                </div>
                <div className='flex-wrap'>
                    <button button type='submit' className='yellowBtn'>나는 며칠동안 훈련해야 1만 시간이 될까?
                    </button>
                    <img className='clickImg' />
                </div>
            </form>
        </div>
    )
}
export default Goal