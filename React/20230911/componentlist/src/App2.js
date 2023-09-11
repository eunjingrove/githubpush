import React, { useState } from 'react'

export default function () {

    const [message, setMessage] = useState('여기를 주목해주세요.')

    function handleOnMouseEnter() {
        setMessage('안녕하세요!');
    }

    function handleOnMouseLeave() {
        setMessage('안녕히 가세요!')
    }

    return (
        <div>
            <p onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>마우스를 올려보세요.</p>
            <div>{message}</div>
        </div>
    )
}
