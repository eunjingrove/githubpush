import React from 'react'
import ExpenseInput from './test-containers/ExpenseInput/ExpenseInput'
import ExpenseList from './test-containers/ExpenseList/ExpenseList'
import IncomeInput from './test-containers/IncomeInput/IncomeInput'
import ExpenseTotal from './test-containers/ExpenseTotal/ExpenseTotal'

function Test() {
    return (
        <article>
            <header>
                {/* 수입 input */}
                <IncomeInput />
            </header>
            <main>
                {/* 지출 input */}
                <ExpenseInput />
                {/* 지출 기록 */}
                <ExpenseList />
                {/* 지출 총합 */}
                <ExpenseTotal />
            </main>
        </article>
    )
}

export default Test