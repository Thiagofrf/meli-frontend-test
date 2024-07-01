import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import axios from 'axios'

const Search = () => {
    const [productList, setProductList] = useState()
    const [searchParams, setSearchParams] = useSearchParams();
    
    useEffect(() => {
        searchParams.get("search")
        // const { data } = axios.get(`/api/items?q=:query`)
        // if (data) items = data.items;
    }, [])

    return (
        <>
            Search
        </>
    )
}

export default Search