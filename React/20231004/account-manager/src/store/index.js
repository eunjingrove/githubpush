import { configureStore } from '@reduxjs/toolkit';
import expenseSlice from './expense/expense-slice';

// 스토어를 구성할 때, reducer 객체를 설정하며, 여기서 'expense'키에 expenseSlice를 할당하여 'expense' 모듈의  슬라이스를 스토어의 리듀서로 등록한다. 
// -> 애플리케이션의 전역 상태를 다루기 위한 Redux 스토어를 구성하는 중요한 부분
const store = configureStore({
    reducer: {
        expense: expenseSlice
    }
})

export default store