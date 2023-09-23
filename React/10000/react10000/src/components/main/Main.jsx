import React, { useState } from 'react'
import './Main.css'

export default function Main({ setModalShow }) {

    const [field, setField] = useState('');
    const [time, setTime] = useState(0);
    const [day, setDay] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setDay(Math.ceil(10000 / parseInt(time)));
        if (field === '') {
            alert('당신이 되고 싶은 전문가를 입력해주세요.')
        } else if (time <= 0) {
            alert('시간을 입력해주세요.')
        }
        setField('');
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="cont-input">
                <p className="txt-wannabe">나는 <input type="text" value={field} onChange={(event) => setField(event.target.value)} placeholder="예) 프로그래밍" />전문가가 될 것이다.
                </p>
                <p className="txt-time">그래서 앞으로 매일 하루에 <input type="number" value={time} onChange={(event) => setTime(event.target.value)} placeholder="예) 5" />시간씩 훈련할 것이다.
                </p>
                <button className="btn-exc">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
            </form>
            {day && <section className="cont-result">
                <h2 className="a11y">결과확인</h2>
                <p className="txt-wannabe">당신은 <strong>{field}</strong> 전문가가 되기 위해서<br /> 대략 <strong>{day}</strong> 이상 훈련하셔야 됩니다.
                </p>
                <button onClick={() => setModalShow(true)} type="button" className="btn-go">훈련하러 가기 GO!GO!</button>
                <button type="button" className="btn-share">공유하기</button>
            </section>}
        </main>
    )
}
