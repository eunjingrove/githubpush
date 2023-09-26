import goodsReducer from "./goodsCounter";
import stockReducer from "./stockCounter";
import { combineReducers } from 'redux';

// 두 reducer를 합쳐서 하나의 reducer로 관리 
const rootReducer = combineReducers({
    goodsReducer,
    stockReducer
});


export default rootReducer;