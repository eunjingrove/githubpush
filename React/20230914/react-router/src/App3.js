import React, { useEffect, useState } from 'react'

const Time = () => {
    const [today, setToday] = useState(new Date());
    const [hour, setHour] = useState(today.getHours());
    const [min, setMin] = useState(today.getMinutes());
    const [sec, setSec] = useState(today.getSeconds());

    useEffect(() => {
        let time = setInterval(() => {
            let t = new Date();
            setHour(t.getHours());
            setMin(t.getMinutes());
            setSec(t.getSeconds());
        }, 1000)
        return () => {
            clearInterval(time);
        }
    }, [today])

    return (
        <div>
            <h1>{hour}시 {min}분 {sec}초</h1>
        </div>
    )
}

function App3() {
    return (
        <div>
            <Time />
        </div>
    )
}

export default App3