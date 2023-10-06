import React, { useState } from 'react'

function LoginPage2() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // 로그인 api 요청하기

    async function login(email, password) {
        const baseUrl = 'https://api.mandarin.weniv.co.kr'
        const reqPath = '/user/login'
        const reqUrl = baseUrl + reqPath;

        const loginData = {
            "user": {
                "email": email,
                "password": password
            }
        }

        try {
            const res = await fetch(reqUrl, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(loginData)
            })
            const result = await res.json()
            console.log(result);
            const token = result.user.token;
            console.log(token)

            if (!result.user) {
                return
            }

            localStorage.setItem('token', token)


        } catch (error) {
            console.log('로그인에 실패했습니다. ')
        }
    }

    function loginSubmit(e) {
        e.preventDefault()
        login(email, password)
    }

    return (
        <>
            <h1>로그인</h1>
            <section>
                <h2>이메일, 비밀번호 입력하는 곳</h2>
                <form onSubmit={loginSubmit}>
                    <input type='email' value={email} placeholder='이메일을 입력해주세요.'
                        onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' value={password}
                        placeholder='비밀번호를 입력해주세요.'
                        onChange={(e) => setPassword(e.target.value)} />
                    <button>로그인</button>
                </form>
            </section>
        </>
    )
}

export default LoginPage2