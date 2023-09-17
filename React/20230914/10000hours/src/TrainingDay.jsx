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
        <div className='be-trained'>
            <Goal setTobecome={setTobecome} setDay={setDay} />
            <div className='train'>
                <p className='flex-wrap'>당신은&nbsp;&nbsp;<span className='bold'>{tobecome}</span>&nbsp;&nbsp;전문가가 되기 위해서</p>
                <p className='flex-wrap'>대략&nbsp;&nbsp;<span className='bold'>{day}</span>&nbsp;일 이상 훈련하셔야 합니다:)</p>
            </div>
            <div className='flex-wrap gap-10 btn-wrap'>
                <button className='yellowBtn' onClick={goModal}>훈련하러 가기 GO!GO!</button>
                {modalShow && <GoModal />}
                <button className='whiteBtn'>공유하기</button>
            </div>
        </div>
    )
}
export default TrainingDay 