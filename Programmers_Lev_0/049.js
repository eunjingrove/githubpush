// 합성수 찾기
// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
    var answer = 0;
    var temp = 0;
    for(let i=1; i<=n; i++) {
        for(let k=1; k<=i; k++) {
            if((i%k===0)) {
                temp++;
                if(temp>=3) {
                    answer++;
                    break;
                } 
            }
        }
        temp = 0;
    }
    return answer;
}
