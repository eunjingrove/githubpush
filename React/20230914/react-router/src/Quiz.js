import React from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation, Outlet, useParams } from 'react-router-dom'

export default function App5() {
    return (
        <div>
            <BrowserRouter>
                <Link to='/'>Home Page</Link>
                <Link to='/product'> Product </Link>
                <Link to='/cart'> Cart </Link>
                <Link to='/users'> Users </Link>
                <Routes>
                    <Route path='/' element={<Index />} />
                    <Route path='/product/:id' element={<ProductDetailPage />}></Route>
                    <Route path='/product/1' element={<One />}></Route>
                    <Route path='/product/2' element={<Two />}></Route>
                    <Route path='/product/3' element={<Three />}></Route>
                    <Route path='/cart' element={<Cart />}></Route>
                    <Route path='/users' element={<Users />}>
                        <Route path='coupon/' element={<Coupon />}></Route>
                        <Route path='question/' element={<Question />}></Route>
                        <Route path='notice/' element={<Notice />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function Index() {
    return (
        <h1>Home Page</h1>
    )
}

function ProductDetailPage() {
    const { id } = useParams() //리액트 라우터에서 제공하는 훅
    return (
        <>
            <h1>Product Detail Page</h1>
            <p>{id}상품</p>
        </>
    )
}

function One() {
    return (
        <h2>hello world 1</h2>
    )
}

function Two() {
    return (
        <h2>hello world 2</h2>
    )
}

function Three() {
    return (
        <h2>hello world 3</h2>
    )
}

function Users() {
    return (
        <h1>Users</h1>
    )
}

function Coupon() {
    return (
        <h2>Coupon</h2>
    )
}

function Question() {
    return (
        <h2>Question</h2>
    )
}

function Notice() {
    return (
        <h1>Notice</h1>
    )
}

function Cart() {
    return (
        <h1>Cart</h1>
    )
}