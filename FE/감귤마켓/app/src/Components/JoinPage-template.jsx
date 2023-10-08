import React from 'react'

function JoinPage2() {
    return (
        <div>
            <button type='button'>로그인 페이지로 돌아가기</button>
            <section>
                <h2>이메일로 회원가입</h2>
                <div>
                    <label>
                        이메일
                        <input placeholder='이메일 주소를 알려주세요.' />
                    </label>
                </div>
                <div>
                    <label>
                        비밀번호
                        <input placeholder='비밀번호를 설정해주세요.' />
                    </label>
                </div>
                <button>다음</button>
            </section>
            <section>
                <h2> 프로필 설정</h2>
                <label>
                    사용자 이름
                    <img />
                </label>
                <input />
                <div>
                    <label>
                        계정 아이디
                        <input placeholder='2~10자 이내여야 합니다.' />
                    </label>
                    <label>
                        <input placeholder='영문, 숫자, 특수문자(,), (_) 만 사용 가능합니다. ' />
                    </label>
                    <label>
                        소개
                        <input placeholder='자신과 판매할 상품에 ㄷ ㅐ해 소개해주세요.' />
                    </label>
                </div>
                <button>감귤마켓 시작하기 </button>
            </section>
        </div>
    )
}

export default JoinPage2