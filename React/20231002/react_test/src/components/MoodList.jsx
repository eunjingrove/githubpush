import React from 'react'
import MoodItem from './MoodItem'

function MoodList(props) {
    const moodList = ['좋아요! 😉', '정말 좋아요! 😄', '최고에요! 😆', '미쳤어요! 🥰']

    return (
        <ul>
            {moodList.map((item, idx) => {
                return <MoodItem item={item} key={idx} setMood={props.setMood} />
            })}s
        </ul>
    )

}

export default MoodList