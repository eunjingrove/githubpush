import React, { useState } from 'react'

function Login(props) {

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');


    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (id === '') {
            alert('아이디를 입력하지 않았습니다.')
        }
        if (pw === '') {
            alert('비밀번호를 입력하지 않았습니다.')
        }

        if (props.user.idUser === id && props.user.pwUser.toString() === pw) {
            props.setLogin(true)
        } else {
            alert('아이디 혹은 비밀번호가 정확하지 않습니다.')
        }

    }

    const handleOnIdInput = (e) => {
        setId(e.target.value)
    }

    const handleOnPwInput = (e) => {
        setPw(e.target.value)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <label>
                아이디
                <input type='text' onChange={handleOnIdInput} />
            </label>
            < br />
            <label>
                비밀번호
                <input type='password' onChange={handleOnPwInput} />
            </label>
            <button type='submit'>로그인</button>
        </form>
    )
}

export default Login