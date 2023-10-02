import React from 'react'
import PetItem from './PetItem'

function PetInfoList({ petList }) {
    return (
        <ul>
            {petList.map((item) => {
                return (
                    <PetItem key={item.id} item={item} />
                )
            })}
        </ul>
    )
}

export default PetInfoList