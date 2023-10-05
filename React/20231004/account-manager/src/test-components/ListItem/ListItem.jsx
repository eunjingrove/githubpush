import React from 'react'

function ListItem({ item }) {
    return (
        <tr>
            <th>{item.name} </th>
            <td>\{item.price}</td>
        </tr>
    )
}

export default ListItem