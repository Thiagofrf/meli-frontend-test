import React from 'react'
import './ProductImage.scss'

const ProductImage = ({thumbnail}) => {
    return (
        <>
            <img src={thumbnail} alt="Imagem do produto" />
        </>
    )
}

export default ProductImage