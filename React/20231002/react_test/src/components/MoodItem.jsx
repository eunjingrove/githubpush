import React from 'react'

function MoodItem(props) {
    return (
        <li><button onClick={() => props.setMood(props.item)}>기분이 {props.item}</button></li>
    )
}

export default MoodItem