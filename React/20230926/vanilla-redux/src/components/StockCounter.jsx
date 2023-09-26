import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { soldOut, sale } from '../modules/stockCounter';
// 메세지를 전달해주는 컴포넌트
// 메세지를 관리해주는 곳은 stockCounter.js

export default function StockCounter() {

    const { message } = useSelector((state) => {
        return {
            message: state.stockReducer.message
        }
    });


    // store의 state 접근하도록 합니다.
    const { stock } = useSelector((state) => {
        return {
            stock: state.goodsReducer.stock
        }
    });

    const dispatch = useDispatch();

    // 디스패치를 실행할 때는 action을 전달
    // stock이 변경될 때마다 실행

    useEffect(() => {
        if (stock <= 0) {
            dispatch(soldOut());
        } else {
            dispatch(sale());
        }
    }, [stock]);


    return (
        <p>{message}</p>
    )
}