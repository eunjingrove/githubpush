import React from 'react'
import { useState } from 'react'
import Goal from './Goal';
import GoModal from './GoModal';

const TrainingDay = () => {
    const [modalShow, setModalShow] = useState(false);
    function goModal() {
        if (!modalShow) {
            setModalShow(true);
        } else {
            setModalShow(false);
        }

    }

    const [tobecome, setTobecome] = useState('');
    const [day, setDay] = useState('');

    return (
        <>
            <Goal setTobecome={setTobecome} setDay={setDay} />
            <p>당신은 {tobecome} 전문가가 되기 위해서</p>
            <p>대략 {day}일 이상 훈련하셔야 합니다:)</p>
            <button onClick={goModal}>훈련하러 가기 GO!GO!</button>
            {modalShow && <GoModal />}
            <button>공유하기</button>
        </>
    )
}
export default TrainingDay 