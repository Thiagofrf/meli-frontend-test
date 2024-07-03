import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { useNavigate } from 'react-router-dom';
import './SearchCard.scss'

const SearchCard = ({index, id, title, price, freeShipping, thumbnail, currency}) => {
    const navigate = useNavigate()
    const formattedPrice = new Intl.NumberFormat(currency).format(price)

    function seeProduct() {
        navigate(`/items/${id}`)
    }

    return (
        <>
            <li 
                key={index} 
                className='search-card__item'
                onClick={seeProduct}
            >
                <img 
                    src={thumbnail} 
                    alt={title} 
                    className="search-card__image" 
                />
                <div className="search-card__content">
                    <p className="search-card__content--price">
                        { currency === 'ARS' ? '$' : 'R$' } {formattedPrice}
                        {
                            freeShipping && 
                            (
                                <span>
                                    <LocalShippingOutlinedIcon />
                                </span>
                            )
                        }
                    </p>
                    <p className="search-card__content--title">
                        {title}
                    </p>
                </div>
            </li>
        </>
    )
}

export default SearchCard