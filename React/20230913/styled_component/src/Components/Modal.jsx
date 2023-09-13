import React from 'react'

function Button(props) {
    const { text, onClick } = props;
    return (
        <button onClick={onClick}>{text}</button>
    )
}

export default function Modal(props) {
    const { title, content, onClose } = props;
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <Button text='Close' onClick={onClose}></Button>
        </div>
    )
}
