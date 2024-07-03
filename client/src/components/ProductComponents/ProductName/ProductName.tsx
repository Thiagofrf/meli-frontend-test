import React from 'react'
import './ProductName.scss'

const ProductName = ({title}) => {
    return (
        <>
            <h2 className='product-title'>
                {title}
            </h2>
        </>
    )
}

export default ProductName