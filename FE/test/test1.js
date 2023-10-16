// 재귀 함수가 어렵다면 반복문으로 시작해서 어떤 부분을 재귀로 만들지 생각하기 
function sumArray(arr, index = 0) {
    if (index === arr.length) {
        return 0
    }
    return arr[index] + sumArray(arr.length + 1);
}



// 사용 예시
const arr = [1, 2, 3, 4, 5];
const result = sumArray(arr);
console.log(result);  // 출력: 15