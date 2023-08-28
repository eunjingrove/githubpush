// dom에서 path 찾기
const path = document.querySelector('path');
const openBtn = document.querySelector('.btn-open');

// dash의 길이와 공백
// path의 전체 길이 구하기 
const pathLength = path.getTotalLength();
// console.log(pathLength);
path.style.strokeDasharray = `${pathLength} + " " + ${pathLength}`

// dash를 어디서부터 그릴지
path.style.strokeDashoffset = pathLength;

function scrollHandler() {
    // 현재 스크롤의 위치
    const scrollTop = document.documentElement.scrollTop;
    // console.log(document.documentElement.scrollTop);

    // 전체 스크롤의 길이
    const scrollHeight = document.documentElement.scrollHeight;

    // 뷰포트의 길이
    const clientHeight = document.documentElement.clientHeight;

    // 스크롤의 위치를 %로 만들기
    // 스크롤의 위치 => % 0 - 1 의 값을 가짐
    // 전체 스크롤 영역 높이에서 뷰포트 크기만큼을 빼줌.
    const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
    // 제일 하단에 뷰포트가 빠져있다.
    // console.log(scrollPercentage);

    const drawLength = pathLength * scrollPercentage;
    console.log(drawLength);

    // pathLength -> 0
    path.style.strokeDashoffset = pathLength - drawLength;

    // button opacity 조절
    openBtn.style.opacity = scrollPercentage;
    if (scrollPercentage > 0.8) {
        openBtn.disabled = false;
    } else {
        openBtn.disabled = true;
    }
}
window.addEventListener('scroll', scrollHandler)


