// 등수 매기기
// 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(score) {
    var answer = [];
    const arr = [].concat(...score)
    for(let i=0; i<arr.length; i+=2) {
        answer.push(Math.ceil(((arr[i]+arr[i+1])/2)))
    }
    let temp = answer.slice().sort((a,b)=>b-a);
    answer = answer.map((v,i)=>temp.indexOf(v)+1)
    return answer;
}
