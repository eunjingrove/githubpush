import React from 'react'

function Display({ mood }) {
    return (
        <div>
            {mood ? <h1>기분이 {mood}</h1> : '아직 선택하지 않았어요 !'}
        </div>
    )
}

export default Display