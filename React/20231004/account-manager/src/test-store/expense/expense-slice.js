import { createSlice } from '@reduxjs/toolkit'


const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
        expenseList: [{ name: 'coffee', price: 5000 }, { name: 'snack', price: 1500 }]
        , income: 10000000
    },
    reducers: {
        addExpenseAction: (currentSlice, action) => {
            currentSlice.expenseList.push(action.payload);
        },
        incomeExpenseAction: (currentSlice, action) => {
            currentSlice.income = action.payload;
        }
    }
})

export const { addExpenseAction, incomeExpenseAction } = expenseSlice.actions;

export default expenseSlice.reducer;