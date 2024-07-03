import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';
import './SearchBar.scss'

const SearchBar = () => {
    const [terms, setTerms] = useState('')
    const navigate = useNavigate()

    function onFormSubmit() {
        navigate(`/items?search=${terms}`)
    }

    return (
        <form 
            className='search-container'
            onSubmit={(e) => {
                e.preventDefault()
                onFormSubmit()
            }}
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
        </form>
    )
}

export default SearchBar