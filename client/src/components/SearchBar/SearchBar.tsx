import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './SearchBar.scss'

const SearchBar = () => {
    return (
        <form className='search-container'>
            <input 
                type="text" 
                className='search-input' 
                placeholder='Nunca dejes de buscar'
            />
            <button 
                className='search-input__button' 
                type='submit'
            >
                <SearchOutlinedIcon />
            </button>
        </form>
    )
}

export default SearchBar