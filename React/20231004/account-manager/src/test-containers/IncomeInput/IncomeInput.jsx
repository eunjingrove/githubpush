import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIncomeAction } from '../../test-store/expense/expense-slice'

function IncomeInput() {

    const income = useSelector((store) => store.expense.income)
    const dispatch = useDispatch()

    function setIncome(e) {
        dispatch(setIncomeAction(parseInt(e.target.value)))
    }

    return (
        <label>
            <input type='number' value={income} onChange={setIncome} placeholder='예) 30000' />
        </label>
    )
}

export default IncomeInput