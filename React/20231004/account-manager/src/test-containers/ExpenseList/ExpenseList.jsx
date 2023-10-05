import React from 'react'
import { useSelector } from 'react-redux'
import List from '../../test-components/List/List'

function ExpenseList() {
    const expenseList = useSelector((store) => store.expense.expenseList)
    return (
        <List items={expenseList} />
    )
}

export default ExpenseList