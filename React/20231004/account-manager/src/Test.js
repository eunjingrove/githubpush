import React from 'react'
import ExpenseInput from './test-containers/ExpenseInput/ExpenseInput'
import ExpenseList from './test-containers/ExpenseList/ExpenseList'
import IncomeInput from './test-containers/IncomInput/IncomeInput'
import ExpenseTotal from './test-containers/ExpenseTotal/ExpenseTotal'

function Test() {
    return (
        <div>
            <IncomeInput />
            <ExpenseInput />
            <ExpenseList />
            <ExpenseTotal />
        </div>
    )
}

export default Test