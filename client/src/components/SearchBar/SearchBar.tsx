import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './SearchBar.scss'

const SearchBar = () => {
    const [terms, setTerms] = useState('')

    function onFormSubmit() {
        return window.location.href = `/items?search=${terms}`
    }

    return (
        <div 
            className='search-container'
            onSubmit={onFormSubmit}
        >
            <input 
                type="text" 
                className='search-input' 
                placeholder='Nunca dejes de buscar'
                onChange={(e) => setTerms(e.target.value)}
            />
            <button 
                className='search-input__button' 
                type='submit'
                onClick={onFormSubmit}
            >
                <SearchOutlinedIcon />
            </button>
        </div>
    )
}

export default SearchBar