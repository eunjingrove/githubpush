// store는 slice 단위로 관리 

import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
        // 사용자의 지출 목록을 관리
        expenseList: [{ name: 'coffee', price: 5000 }, { name: 'icecream', price: 1500 }],
        income: 1000000
    },
    reducers: {
        // addExpenseAction ===> 액션 type의 이름
        // 사용자의 지출 내역을 store에 반영
        // 실행되는 dispatch에 전달되는 action에 따라서 reducer는 바뀐다.
        addExpenseAction: (currentSlice, action) => {
            // slice의 expenseList에 접근하여 데이터를 수정한다. 
            currentSlice.expenseList.push(action.payload)
        },

        // 사용자의 수입을 store에 반영
        setIncomeAction: (currentSlice, action) => {
            console.log('setIncomeAction')
            currentSlice.income = action.payload
        }
    }

});

// action을 디스패치에서 사용할 수 있도록 밖으로 내보낸다.
export const { addExpenseAction, setIncomeAction } = expenseSlice.actions;

// slice에서 생성한 reducer들을 외부로 내보낸다.
export default expenseSlice.reducer