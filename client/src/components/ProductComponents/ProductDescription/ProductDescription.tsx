import React from 'react'
import './ProductDescription.scss'

const ProductDescription = ({text}) => {
    return (
        <>
            <div className="product-container__description">
                <p>Descrição do produto</p>
                <p>{text}</p>
            </div>
        </>
    )
}

export default ProductDescription