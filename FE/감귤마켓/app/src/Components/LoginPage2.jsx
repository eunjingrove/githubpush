import React, { useState } from 'react'

function LoginPage2() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function login(email, password) {
        const baseUrl = 'https://api.mandarin.weniv.co.kr'
        const reqUrl = '/user/login'
        const url = baseUrl + reqUrl
        const loginData = {
            "user": {
                email: email,
                password: password
            }
        }
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        const result = await res.json()


    }


    const loginSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }

    return (
        <>
            <form onSubmit={loginSubmit}>
                <label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='이메일을 입력해주세요.' />
                </label>
                <label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='비밀번호를 입력해주세요.' />
                </label>
                <button>로그인</button>
            </form>
        </>
    )
}

export default LoginPage2