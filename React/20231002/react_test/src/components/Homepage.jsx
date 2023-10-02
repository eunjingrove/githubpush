import React from 'react'

function Homepage(props) {
    return (
        <div>
            <h1>{props.user.idUser}님 환영합니다.</h1>
        </div>
    )
}

export default Homepage