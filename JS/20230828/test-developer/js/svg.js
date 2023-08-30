const path = document.querySelector('path');
const openBtn = document.querySelector('.btn-open');

const pathLength = path.getTotalLength();
path.style.strokeDasharray = `${pathLength} + " " + ${pathLength}`

path.style.strokeDashoffset = pathLength;

function scrollHandler() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
    const drawLength = pathLength * scrollPercentage;

    path.style.strokeDashoffset = pathLength - drawLength;

    openBtn.style.opacity = scrollPercentage;
    if (scrollPercentage > 0.8) {
        openBtn.disabled = false;
    } else {
        openBtn.disabled = true;
    }

}

window.addEventListener('scroll', scrollHandler);