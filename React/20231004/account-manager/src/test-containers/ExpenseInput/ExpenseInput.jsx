import React, { useState } from 'react'
import { addExpenseAction } from '../../test-store/expense/expense-slice';
import { useDispatch } from 'react-redux'

function ExpenseInput() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();

    const expenseInputSubmit = (e) => {
        e.preventDefault()
        dispatch(addExpenseAction({ name, price }))
    }

    return (
        <form onSubmit={expenseInputSubmit}>
            <label>
                상품명
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                지출금
                <input type='number' value={price} onChange={(e) => setPrice(parseInt(e.target.value))} />
            </label>
            <button>추가하기</button>
        </form>
    )
}

export default ExpenseInput