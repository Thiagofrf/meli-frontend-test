import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import './Product.scss'
import ProductBuyButton from '../../components/ProductComponents/ProductBuyButton/ProductBuyButton.tsx';
import ProductDescription from '../../components/ProductComponents/ProductDescription/ProductDescription.tsx';
import ProductImage from '../../components/ProductComponents/ProductImage/ProductImage.tsx';
import ProductName from '../../components/ProductComponents/ProductName/ProductName.tsx';
import ProductPrice from '../../components/ProductComponents/ProductPrice/ProductPrice.tsx';

const Product = () => {
    const [product, setProduct] = useState<any>()
    const [description, setDescription] = useState<any>()
    const { productId } = useParams()

    console.log(productId)

    useEffect(() => {
        async function getProduct(productId: string | undefined) {
            try {
               const { data } = await axios.get(`https://api.mercadolibre.com/items/${productId}`)
                setProduct(data)
            } catch(e) {
                console.log('Error [getProduct]', e)
            }
        }

        async function getDescription(productId: string | undefined) {
            try {
               const { data } = await axios.get(`https://api.mercadolibre.com/items/${productId}/description`)
                setDescription(data)
            } catch(e) {
                console.log('Error [getDescription]', e)
            }
        }

        getProduct(productId)
        getDescription(productId)
    }, [productId])

    return (
        <>
            <div className="product-container">
                <div className="product-container__main">
                    <ProductImage 
                        thumbnail={product?.pictures?.[0].url}
                    />
                    <div className="product-container__main--details">
                        <p className='product-container__main--details-condition'>
                            {product?.condition === "new" ? "Novo" : "Usado"}
                        </p>
                        <ProductName 
                            title={product?.title}
                        />
                        <ProductPrice 
                            price={product?.price}
                            currency={product?.currency_id}
                        />
                        <ProductBuyButton />
                    </div>
                </div>
                <ProductDescription 
                    text={description?.plain_text}
                />
            </div>
        </>
    )
}

export default Product