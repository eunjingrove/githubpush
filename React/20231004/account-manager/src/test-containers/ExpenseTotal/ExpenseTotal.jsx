import React from 'react'
import { useSelector } from 'react-redux'

function ExpenseTotal() {
    // 총합
    // 잔액
    const expenseList = useSelector((store) => store.expense.expenseList);
    const total = expenseList.reduce((acc, cur) => acc + cur.price, 0);

    const income = useSelector((store) => store.expense.income)
    const balance = income - total

    return (
        <>
            <span>지출 총합: {total}</span>
            <span> 잔액: {balance}</span>
        </>
    )
}

export default ExpenseTotal