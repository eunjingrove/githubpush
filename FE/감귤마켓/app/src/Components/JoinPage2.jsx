import React, { useState } from 'react'

function JoinPage2() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [accountId, setAccoutId] = useState('')
    const [name, setName] = useState('')
    const [intro, setIntro] = useState('')
    const [profileImg, setProfileImg] = useState('https://api.mandarin.weniv.co.kr/Ellipse.png')


    const handleImgInput = (e) => {
        // 파일 가져오기 
        const imageFile = e.target.files[0];
    }

    async function uploadImage(imageFile) {
        const baseUrl = 'https://api.mandarin.weniv.co.kr/'
        const reqUrl = 'image/uploadfile'
        const url = baseUrl + reqUrl
        const form = new FormData()
        form.append('image', imageFile)

        const res = await fetch(url, {
            method: 'POST',
            body: form
        })
        const json = await res.json();
        console.log(json)
        const imageUrl = baseUrl + json.filename
        setProfileImg(imageUrl)
        console.log(profileImg)
    }

    const handleJoin = () => {
        const joinData = {
            user: {
                email: email,
                password: password,
                accountid: accountId,
                name: name,
                intro: intro
            }
        }
        join(joinData)
    }

    async function join(joinData) {
        const url = 'https://api.mandarin.weniv.co.kr/user'
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(joinData)
        })
        const json = await res.json();
        console.log(json)
    }

    return (
        <div>
            <button type='button'>로그인 페이지로 돌아가기</button>
            <section>
                <h2>이메일로 회원가입</h2>
                <div>
                    <label>
                        이메일
                        <input placeholder='이메일 주소를 알려주세요.' value={email} onChange={(e) => setEmail(e.target.value)} type='email' />
                    </label>
                </div>
                <div>
                    <label>
                        비밀번호
                        <input placeholder='비밀번호를 설정해주세요.' value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
                    </label>
                </div>
                <button>다음</button>
            </section>
            <section>
                <h2> 프로필 설정</h2>
                <label>
                    사용자 이름
                    <img src={profileImg} alt='' />
                </label>
                <input type='file' onChange={handleImgInput} accept='image/*' />
                <div>
                    <label>
                        계정 아이디
                        <input placeholder='2~10자 이내여야 합니다.' value={accountId} onChange={(e) => setAccoutId(e.target.value)} type='text' />
                    </label>
                    <label>
                        이름
                        <input placeholder='영문, 숫자, 특수문자(,), (_) 만 사용 가능합니다. ' value={name} onChange={(e) => setName(e.target.value)} type='text' />
                    </label>
                    <label>
                        소개
                        <input placeholder='자신과 판매할 상품에 ㄷ ㅐ해 소개해주세요.' value={intro} onChange={(e) => setIntro(e.target.value)} type='text' />
                    </label>
                </div>
                <button type='button' onClick={handleJoin}>감귤마켓 시작하기 </button>
            </section>
        </div>
    )
}

export default JoinPage2