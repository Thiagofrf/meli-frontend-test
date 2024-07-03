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
               const { data } = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${searchParams}`)
                setProductList(data.results.slice(0, 4))
            } catch(e) {
                console.log('Error [getSearchParams]', e)
            }
        }

        getSearchQuery(paramsData)
    }, [searchParams])

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
                                    index={index}
                                    id={item?.id}
                                    title={item?.title}
                                    price={item?.price}
                                    freeShipping={item?.shipping?.free_shipping}
                                    thumbnail={item?.thumbnail}
                                    currency={item?.currency_id}
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