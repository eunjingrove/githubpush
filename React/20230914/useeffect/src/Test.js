import React, { useState, useEffect } from 'react'

function Time() {
    const [today, setToday] = useState(new Date());
    const [hour, setHour] = useState(today.getHours())
    const [min, setMin] = useState(today.getMinutes())
    const [sec, setSec] = useState(today.getSeconds())

    useEffect(() => {
        let time = setInterval(() => {
            const t = new Date();
            setToday(t)
            setHour(t.getHours());
            setMin(t.getMinutes());
            setSec(t.getSeconds());
        }, 1000)
        return () => {
            clearInterval(time);
        }
    })

    return (
        <>
            <h1>시간: {hour}시 {min}분 {sec}초</h1>
        </>
    )
}

function Test() {
    return (
        <div>
            <Time />
        </div>
    )
}

export default Test