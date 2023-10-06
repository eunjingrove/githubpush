import { useState } from "react"

const JoinPage = ({ handlePage }) => {
    //     {
    // 		"user": {
    // 				"username": String*,
    // 				"email": String*,
    // 				"password": String*,
    // 				"accountname": String*,
    // 				"intro": String,
    // 				"image": String // 예시) https://api.mandarin.weniv.co.kr/1641906557953.png
    // 		}
    // } 
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accountname, setAccountname] = useState("");
    const [imgSrc, setImgSrc] = useState("https://api.mandarin.weniv.co.kr/Ellipse.png");
    const [intro, setIntro] = useState('');

    const join = async (joinData) => {
        const reqUrl = "https://api.mandarin.weniv.co.kr/user"
        const res = await fetch(reqUrl, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(joinData)
        })
        const json = await res.json()
        console.log(json)
    }

    const inputUsername = (e) => {
        setUsername(e.target.value);
    }
    const inputEmail = (e) => {
        setEmail(e.target.value);
    }
    const inputPassword = (e) => {
        setPassword(e.target.value);
    }
    const inputAccountname = (e) => {
        setAccountname(e.target.value);
    }

    const inputIntro = (e) => {
        setIntro(e.target.value)
    }

    // 서버에 요청을 보내야 된다 !!!!! 
    const uploadImage = async (imageFile) => {
        const baseUrl = "https://api.mandarin.weniv.co.kr/"
        const reqUrl = baseUrl + "image/uploadfile";
        // 폼데이터 만들기 -> html에서 만든 <>에 액션으로 전송할 때 함께 날라가는 데이터를 자바스크립트로 만들 수 있게 해주는 것 
        const form = new FormData();
        // 폼데이터 값 추가하기 
        // 폼데이터.append("키", "값")
        form.append('image', imageFile);
        // 폼 요청하기
        const res = await fetch(reqUrl, {
            method: "POST",
            body: form
        })
        const json = await res.json()
        console.log(json)
        const imageUrl = baseUrl + json.filename
        setImgSrc(imageUrl);
    }

    const handleChangeImage = (e) => {
        // 파일 가져오기 
        const imageFile = e.target.files[0];
    }

    const submitJoin = () => {
        const joinData = {
            user: {
                username: username,
                email: email,
                password: password,
                accountname: accountname,
                intro: intro
            }
        }
        join(joinData);
    }

    return (
        <>
            <button type="button" onClick={handlePage}>로그인페이지로 돌아가기</button>
            <section >
                <h2 >이메일로 회원가입</h2>
                <div >
                    <label htmlFor="emailInput">이메일</label>
                    <input value={email} onChange={inputEmail} type="email" id="emailInput" name="email" placeholder="이메일 주소를 알려주세요." />
                </div>
                <div>
                    <label htmlFor="passwordInput">비밀번호</label>
                    <input value={password} onChange={inputPassword} type="password" name="password" id="passwordInput" placeholder="비밀번호를 설정해 주세요." />
                </div>
                <button type="button" >다음</button>
            </section>
            <section>
                <h2 >프로필 설정</h2>
                <p>나중에 언제든지 변경할 수 있습니다.</p>
                <label htmlFor="profileImg">
                    <img src={imgSrc} alt="" id="imagePre" />
                </label>
                <input type="file" onChange={handleChangeImage} id="profileImg" name="image" accept="image/*" />
                <div >
                    <label htmlFor="userNameInput">사용자 이름</label>
                    <input value={username} onChange={inputUsername} type="text" id="userNameInput" name="username" placeholder="2~10자 이내여야 합니다." />
                </div>
                <div >
                    <label htmlFor="userIdInput">계정 ID</label>
                    <input value={accountname} onChange={inputAccountname} type="text" id="userIdInput" name="accountname" placeholder="영문, 숫자, 특수문자(,), (_)만 사용 가능합니다." />
                </div>
                <div>
                    <label htmlFor="userIntroInput">소개</label>
                    <input onChange={inputIntro} type="text" id="userIntroInput" name="intro" placeholder="자신과 판매할 상품에 대해 소개해 주세요." />
                </div>
                <button type="button" onClick={submitJoin} >감귤마켓 시작하기</button>
            </section>
        </>
    )
}

export default JoinPage