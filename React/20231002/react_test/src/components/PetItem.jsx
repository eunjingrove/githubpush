import React from 'react'

function PetItem({ item }) {
    return (
        <li>{item.name}는 {item.species}입니다. 그리고 {item.age}살 입니다.</li>
    )
}

export default PetItem