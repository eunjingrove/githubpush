// 사용자로부터 
const score = parseInt(prompt('성적을 입력하세요.'));

switch (true) {
    case score >= 90:
        return 'A';
        break;
    case score >= 80:
        return 'B';
        break;
    case score >= 70:
        return 'C';
        break;
    case score >= 60:
        return 'D';
        break;
    default:
        console.log('강해져서 돌아와라');
}

// switch(score)가 아니라 switch(true)가 들어가는 이유
// 케이스에 해당하는 값이 true일 때 반환하기 때문에 true를 매개변수로 한다. 
