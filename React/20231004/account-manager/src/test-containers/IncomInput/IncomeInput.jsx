import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incomeExpenseAction } from '../../test-store/expense/expense-slice';

function IncomeInput() {
    const income = useSelector((store) => store.expense.income)

    const dispatch = useDispatch();

    function setIncome(e) {
        dispatch(incomeExpenseAction(parseInt(e.target.value)));
    }



    return (
        <div>
            <label>
                수입
                <input type='number' defaultValue={income} onChange={setIncome} />
            </label>
        </div>
    )
}

export default IncomeInput