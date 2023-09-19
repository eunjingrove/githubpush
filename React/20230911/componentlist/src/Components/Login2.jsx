import React, { useState } from 'react'

function Login2({ user, setLogin }) {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const idInput = (e) => {
        setId(e.target.value);
    }
    const pwInput = (e) => {
        setPw(e.target.value)
    }

    const clickSubmit = (e) => {
        e.preventDefault();
        if (id === '') {
            alert('아이디를 입력하지 않았습니다.')
        } else if (pw === '') {
            alert('비밀번호를 입력하지 않았습니다.')
        }
        if (id === user.idUser && pw === user.pwUser.toString()) {
            setLogin(true);
        } else {
            alert('아이디나 비밀번호를 다시 확인해주세요.')
        }
    }

    return (

        <form onSubmit={clickSubmit}>
            <label>
                아이디 :
                <input type='text' onChange={idInput} />
            </label>
            <label>
                비밀번호 :
                <input type='password' onChange={pwInput} />
            </label>
            <button type='submit'>로그인</button>
        </form>

    )
}

export default Login2