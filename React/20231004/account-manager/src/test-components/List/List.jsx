import React from 'react'
import ListItem from '../ListItem/ListItem'

function List({ items }) {
    return (
        <table>
            <tbody>
                {items.map((item, index) => {
                    return <ListItem item={item} key={index} />
                })}
            </tbody>
        </table>
    )
}

export default List