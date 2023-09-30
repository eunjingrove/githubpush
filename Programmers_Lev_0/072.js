// 직사각형 넓이 구하기
// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

function solution(dots) {
    let dots1 = dots.map(v=>v[0]).sort((a,b)=>b-a);
    let dots2 = dots.map(v=>v[1]).sort((a,b)=>b-a);
   return (dots1[0]-dots1[3])*(dots2[0]-dots2[3])
     
}
