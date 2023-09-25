import React from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation, Outlet } from 'react-router-dom'

function Index() {
    return (
        <h1>hello world</h1>
    )
}

function One({ name }) {
    return (
        <h2>One {name} 페이지입니다.</h2>
    )
}

function Two() {
    return (
        <h2>Two 페이지입니다.</h2>
    )
}

function Three() {
    return (
        <h2>Three 페이지입니다.</h2>
    )
}

function Blog() {
    const location = useLocation();
    console.log(location);
    return (
        <h2>hello Blog</h2>
    )
}

function Eunjin1() {
    return (
        <h2>은진1</h2>
    )
}

function Eunjin2() {
    return (
        <h2>은진2</h2>
    )
}

function Eunjin3() {
    return (
        <h2>은진3</h2>
    )
}

function App5() {
    return (
        <BrowserRouter>
            <Link to='/one'>one</Link>
            <Link to='/two'> two</Link>
            <Link to='/three'> three</Link>
            <Link to='/blog/1'> 블로그1</Link>
            <Link to='/blog/2'> 블로그2</Link>
            <Link to='/blog/3'> 블로그3</Link>
            <Routes>
                <Route path='/' element={<Index />}></Route>
                <Route path='/one' element={<One name='licat' />}></Route>
                <Route path='/two' element={<Two />}></Route>
                <Route path='/Three/*' element={<Outlet />}>
                    <Route path='eunjinone' element={<Eunjin1></Eunjin1>}></Route>
                    <Route path='eunjintwo' element={<Eunjin2></Eunjin2>}></Route>
                    <Route path='eunjinthree' element={<Eunjin3></Eunjin3>}></Route>
                </Route>
                <Route path='/blog/:id' element={<Blog />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App5