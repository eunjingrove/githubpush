import React, { useState, useEffect } from 'react';

function App5() {
    const [count, setCount] = useState(0);

    // useEffect를 사용하여 부수 효과 정의
    useEffect(() => {
        document.title = `Count: ${count}`;

        // 클린업 함수를 반환하여 타이머 정리
        return () => {
            document.title = 'React App';
        };
    }, [count]); // count가 변경될 때만 실행

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default App5