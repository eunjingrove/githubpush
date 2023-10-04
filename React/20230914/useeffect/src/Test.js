import React, { useEffect, useState } from 'react'

function Test() {
    const [today, setToday] = useState(new Date());
    const [hour, setHour] = useState(today.getHours())
    const [min, setMin] = useState(today.getMinutes())
    const [sec, setSec] = useState(today.getSeconds());
    console.log('렌더링 됩니다?')

    useEffect(() => {
        let time = setInterval(() => {
            const t = new Date();
            setHour(t.getHours());
            setMin(t.getMinutes());
            setSec(t.getSeconds());
        }, 1000)

        return () => clearInterval(time)

    }, [today])


    return (
        <div>
            <h1>시간 : {hour}시 {min}분 {sec}초</h1>
        </div>
    )
}

export default Test