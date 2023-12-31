import { useState } from "react";
import axios from "axios";

const JoinPage = ({ handlePage }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountname, setAccountname] = useState("");

  const join = async (joinData) => {
    const reqUrl = "https://api.mandarin.weniv.co.kr/user";
    try {
      const res = await axios.post(reqUrl, joinData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data);
    } catch (error) {
      console.error("Error while joining:", error);
    }
  };

  const inputUsername = (e) => {
    setUsername(e.target.value);
  };
  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };
  const inputAccountname = (e) => {
    setAccountname(e.target.value);
  };

  const submitJoin = () => {
    const joinData = {
      user: {
        username: username,
        email: email,
        password: password,
        accountname: accountname,
      },
    };
    join(joinData);
  };

  return (
    <>
      <button type="button" onClick={handlePage}>
        로그인페이지로 돌아가기
      </button>
      <section>
        <h2>이메일로 회원가입</h2>
        <div>
          <label htmlFor="emailInput">이메일</label>
          <input
            value={email}
            onChange={inputEmail}
            type="email"
            id="emailInput"
            name="email"
            placeholder="이메일 주소를 알려주세요."
          />
        </div>
        <div>
          <label htmlFor="passwordInput">비밀번호</label>
          <input
            value={password}
            onChange={inputPassword}
            type="password"
            name="password"
            id="passwordInput"
            placeholder="비밀번호를 설정해 주세요."
          />
        </div>
        <button type="button">다음</button>
      </section>
      <section>
        <h2>프로필 설정</h2>
        <div>
          <label htmlFor="userNameInput">사용자 이름</label>
          <input
            value={username}
            onChange={inputUsername}
            type="text"
            id="userNameInput"
            name="username"
            placeholder="2~10자 이내여야 합니다."
          />
        </div>
        <div>
          <label htmlFor="userIdInput">계정 ID</label>
          <input
            value={accountname}
            onChange={inputAccountname}
            type="text"
            id="userIdInput"
            name="accountname"
            placeholder="영문, 숫자, 특수문자(,), (_)만 사용 가능합니다."
          />
        </div>
        <button type="button" onClick={submitJoin}>
          감귤마켓 시작하기
        </button>
      </section>
    </>
  );
};

export default JoinPage;
