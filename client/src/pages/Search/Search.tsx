import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import SearchCard from '../../components/SearchCard/SearchCard.tsx';
import './Search.scss'

const Search = () => {
    const [productList, setProductList] = useState<any>()
    const [searchParams] = useSearchParams();
    const paramsData = searchParams.get("search")

    useEffect(() => {
        async function getSearchQuery(searchParams: string | null) {
            try {
               const { data } = await axios.get(`http://localhost:8080/api/items?q=${searchParams}`) 
                setProductList(data.items)
            } catch(e) {
                console.error('Error [getSearchParamsTest]', e)
            }
        }

        getSearchQuery(paramsData)
    }, [searchParams, paramsData])

    return (
        <> 
            <ul className='search-result__container'>
                {
                    paramsData === null || paramsData === '' || productList?.length < 1 ?
                    <p>
                        Nenhum produto encontrado. Busque por outros produtos.
                    </p>
                :
                    <>
                        {productList?.map((item: any, index: number) => {
                            return (
                                <SearchCard 
                                    key={index}
                                    index={index}
                                    id={item?.id}
                                    title={item?.title}
                                    price={item?.price?.decimals}
                                    freeShipping={item?.free_shipping}
                                    thumbnail={item?.picture}
                                    currency={item?.price?.currency}
                                />
                            )
                        })}
                    </>
                } 
            </ul>
        </>
    )
}

export default Search