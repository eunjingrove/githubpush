import React, { useState } from 'react'

function LoginPage({ handlePage }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async (email, password) => {
        const baseUrl = "https://api.mandarin.weniv.co.kr";
        const reqPath = "/user/login"
        const reqUrl = baseUrl + reqPath

        const loginData = {
            "user": {
                "email": email,
                "password": password
            }
        }

        // 실무에서 try catch를 사용하는 것이 좋음 
        try {
            // 로그인해서 token 꺼내기 
            const res = await fetch(reqUrl, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(loginData)

            })
            const json = await res.json()
            console.log(json)
            const token = json.user.token;
            console.log(token)

            // 객체에 user가 없는 경우 == 로그인 실패했을 때
            if (!json.user) {
                return
            }

            // 토근 저장 
            localStorage.setItem('token', token);


        } catch (error) {
            alert('로그인에  실패했습니다. ')
        }
    }

    const inputEmail = (e) => {
        setEmail(e.target.value)
    }

    const inputPassword = (e) => {
        setPassword(e.target.value)
    }

    const submitLogin = (e) => {
        e.preventDefault()
        login(email, password)
    }
    // 요청이 잘 됐는지 확인하기 위해 -> 네트워크 - fetch - 페이로드와 응답 확인 !! 

    return (
        <>
            <h1>로그인</h1>
            <section>
                <h2>이메일, 비밀번호 입력하는 곳</h2>
                <form onSubmit={submitLogin}>
                    <input type='text' placeholder='이메일 입력' value={email} onChange={inputEmail} />
                    <input type='text' placeholder='비밀번호 입력' value={password} onChange={inputPassword} />
                    <button>로그인</button>
                    <button type='button' onClick={handlePage}>회원가입</button>
                </form>
            </section>
        </>
    )
}

export default LoginPage