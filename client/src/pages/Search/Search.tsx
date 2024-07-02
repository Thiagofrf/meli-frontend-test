import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { getSearchQuery } from '../../utils/utils';
import axios from 'axios'

const Search = () => {
    const [productList, setProductList] = useState()
    const [searchParams, setSearchParams] = useSearchParams();
    const paramsData = searchParams.get("search")

    useEffect(() => {
        getSearchQuery(paramsData)
    }, [])

    return (
        <>
            Search
        </>
    )
}

export default Search