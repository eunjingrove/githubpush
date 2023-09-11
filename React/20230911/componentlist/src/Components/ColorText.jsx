function ColorText(props) {
    return (
        <div>
            <h3 style={{ color: props.color }}>색이 바뀌어요</h3>
        </div>
    )
}

export default ColorText


// 구조분해할당
// function ColorText(color) {
//     구조분해할당
//     return (
//         <div>
//             <h3 style={{ color: color }}>색이 바뀌어요</h3>
//         </div>
//     )
// }