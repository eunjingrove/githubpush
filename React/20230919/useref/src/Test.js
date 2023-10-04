import React, { useRef, useState, useMemo } from 'react'

function Test() {
    const nameValue = useRef(null)
    const idValue = useRef(null)
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [userInfo, setUserInfo] = useState([]);

    function handleOnName() {
        setName(nameValue.current.value)
        console.log('렌더링 🍊')
    }

    function handleOnId() {
        setId(idValue.current.value)
        console.log('렌더링 🍓')
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        setUserInfo([...userInfo, { name: name, id: id }])
        nameValue.current.value = ''
        idValue.current.value = ''
        nameValue.current.focus()
        console.log('렌더링 🥝')
    }

    function getNum(li) {
        console.log('렌더링 🍋')
        return li.length;
    }

    let n = useMemo(() =>
        getNum(userInfo)
        , [userInfo])

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <label>
                    <input type='text' onChange={handleOnName} placeholder='이름을 입력하세요' ref={nameValue} />
                </label>
                <label>
                    <input type='text' onChange={handleOnId} placeholder='아이디를 입력하세요' ref={idValue} />
                </label>
                <button type='submit'>회원 명부 작성</button>

            </form>
            <ul>
                {userInfo.map((item, index) => (
                    <li key={index}>
                        <h3>{item.name}</h3>
                        <h3>{item.id}</h3>
                    </li>
                ))}
            </ul>
            <span>{n}</span>
        </>

    )
}

export default Test