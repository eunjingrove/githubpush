import React from 'react'
import loading from '../images/Loading_icon.gif'

function Loading() {
    return (
        <img src={loading} alt="" style={{ position: 'fixed', top: '50%', left: '50%' }} />
    )
}

export default Loading