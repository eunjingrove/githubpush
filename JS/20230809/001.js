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
