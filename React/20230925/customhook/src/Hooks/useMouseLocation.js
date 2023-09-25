import { useEffect, useState } from "react";


function useMouseLocation(initVal) {
    const [mouseLocation, setMouseLocation] = useState(
        initVal || { x: null, y: null }
    );
    //  || 연산자는 처음으로 만난 true값이나 마지막 false 값을 반환
    // 만약 initVal의 값이 undefined일 경우 { x: null, y: null }을 전달하고 initVal이 들어온 경우 initVal을 전달 
    // DOM 을 이용해서 화면상의 마우스 좌표를 얻어내고 mouseLocation에 업데이트 해보세요.
    // mousemove
    useEffect(() => {
        window.addEventListener("mousemove", (event) => {
            setMouseLocation({ x: event.x, y: event.y });
        });
    }, []);

    return mouseLocation;

}

export default useMouseLocation;

