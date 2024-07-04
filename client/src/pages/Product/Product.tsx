import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import './Product.scss'
import ProductBuyButton from '../../components/ProductComponents/ProductBuyButton/ProductBuyButton.tsx';
import ProductDescription from '../../components/ProductComponents/ProductDescription/ProductDescription.tsx';
import ProductImage from '../../components/ProductComponents/ProductImage/ProductImage.tsx';
import ProductName from '../../components/ProductComponents/ProductName/ProductName.tsx';
import ProductPrice from '../../components/ProductComponents/ProductPrice/ProductPrice.tsx';
import Loading from '../../assets/loading.gif'

const Product = () => {
    const [product, setProduct] = useState<any>()
    const { productId } = useParams()

    useEffect(() => {
        async function getProduct(productId: string | undefined) {
            try {
                const { data } = await axios.get(`http://localhost:8080/api/items/${productId}`)
                setProduct(data)
            } catch(e) {
                console.error('Error [getProductTest]', e)
            }
        }

        getProduct(productId)
    }, [productId])

    return (
        <>
            {product === undefined ?
                <div className="product-container loading">
                    <img src={Loading} alt='Loading Icon'/>
                </div>
            :
                <div className="product-container">
                    <div className="product-container__main">
                        <ProductImage 
                            thumbnail={product?.item?.picture}
                        />
                        <div className="product-container__main--details">
                            <p className='product-container__main--details-condition'>
                                {product?.condition === "new" ? "Novo" : "Usado"}
                            </p>
                            <ProductName 
                                title={product?.item?.title}
                            />
                            <ProductPrice 
                                price={product?.item?.price?.decimals}
                                currency={product?.item?.price?.currency}
                            />
                            <ProductBuyButton />
                        </div>
                    </div>
                    <ProductDescription 
                        text={product?.item?.description}
                    />
                </div>
            }     
        </>
    )
}

export default Product