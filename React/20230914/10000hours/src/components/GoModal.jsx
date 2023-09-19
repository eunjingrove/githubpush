import React from 'react'

function GoModal({ setModalShow }) {

    return (
        <div className='modal' onClick={() => setModalShow(false)}>
            <h3>화이팅!!♥♥♥</h3>
            <p>당신의 꿈을 응원합니다!</p>
            <img className='licatImg' />
            <button type='button' className='yellowBtn'>종료하고 진짜 훈련하러 가기 GO!GO!</button>
        </div>
    )
}

export default GoModal