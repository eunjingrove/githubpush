import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addExpenseAction } from '../../test-store/expense/expense-slice';

function ExpenseInput() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();

    function submit(e) {
        e.preventDefault()
        dispatch(addExpenseAction({ name, price }))
    }

    return (
        // 지출 입력
        <form onSubmit={submit}>
            <label>
                <input type='text' placeholder='예) 사과' onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                <input type='number' placeholder='예) 5000' onChange={(e) => setPrice(parseInt(e.target.value))} />
            </label>
            <button>추가</button>
        </form>
    )
}

export default ExpenseInput