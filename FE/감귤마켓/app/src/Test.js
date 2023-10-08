import React, { useState } from 'react'
import LoginPage2 from './Components/LoginPage2'
import JoinPage2 from './Components/JoinPage2';

function Test() {
    const [info, setInfo] = useState('');

    const getMyInfo = async () => {
        // 토큰 가져오기 
        const token = localStorage.getItem('token')
        console.log(token);
        const reqUrl = 'https://api.mandarin.weniv.co.kr/user/myinfo'


        const res = await fetch(reqUrl, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const json = await res.json();
        console.log(json)
        setInfo(json.user.accountname)
    }

    return (
        <>
            <button type='button' onClick={getMyInfo}>내 정보 불러오기</button>
            <ul>
                <li>{info}</li>
            </ul>
            <LoginPage2 />
            <JoinPage2 />
        </>
    )
}

export default Test