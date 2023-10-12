import React from 'react'
import ListItem from './ListItem'

function List({ expenseList }) {
    return (
        <table>
            <tbody>
                {expenseList && expenseList.map((item, idx) =>
                    <ListItem key={idx} item={item} />
                )}
            </tbody>
        </table>
    )
}

export default List