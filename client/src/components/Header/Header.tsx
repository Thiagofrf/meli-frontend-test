import React from 'react'
import Logo from '../../assets/meli-icon.png'
import SearchBar from '../SearchBar/SearchBar.tsx'
import './Header.scss'

const Header = () => {
    return (
        <header>
            <img 
                src={Logo} 
                alt="Ícone Mercado Livre" 
            />
            <SearchBar />
        </header>
    )
}

export default Header