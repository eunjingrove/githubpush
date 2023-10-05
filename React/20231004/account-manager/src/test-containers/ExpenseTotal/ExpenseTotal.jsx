import React from 'react'
import { useSelector } from 'react-redux'

function ExpenseTotal() {
    const expenseList = useSelector((store) => store.expense.expenseList)

    const expenseTotal = expenseList.reduce((acc, item) => acc + item.price, 0)

    const income = useSelector((store) => store.expense.income)
    const balance = income - expenseTotal

    return (
        <div>
            <span>총 지출: {expenseTotal}</span>
            <span>잔액: {balance}</span>
        </div>
    )
}

export default ExpenseTotal