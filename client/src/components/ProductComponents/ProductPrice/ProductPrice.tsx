import React from 'react'
import './ProductPrice.scss'

const ProductPrice = ({price, currency}) => {
    const formattedPrice = new Intl.NumberFormat(currency).format(price)

    return (
        <>
            <span>
                {formattedPrice}
            </span>
        </>
    )
}

export default ProductPrice