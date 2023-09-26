import React, { useState, useEffect } from 'react'
import useScroll from './Hooks/useScroll'
import ImageList from './components/ImageList'
import Loading from './components/Loading'

function Test() {
    const [imageList, setImageList] = useState([])
    const [pageToFetch, setPageToFetch] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const isBottom = useScroll()

    useEffect(() => {
        setPageToFetch((prevPage) => {
            return prevPage + 1
        })
    }, [isBottom])

    async function fetchImageByPage() {
        setIsLoading(true)
        try {
            const response = await fetch(`https://picsum.photos/v2/list?page=${pageToFetch}&limit=6`)
            if (!response.ok) {
                throw new Error('네트워크에 문제가 생겼습니다.');
            }

            const data = await response.json();

            setImageList((prevVal) => {
                return [...prevVal, ...data]
            })

            setIsLoading(false);

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchImageByPage()
    }, [pageToFetch])

    return (
        <>
            <ImageList imageList={imageList} />
            {isLoading && <Loading />}
        </>
    )
}

export default Test