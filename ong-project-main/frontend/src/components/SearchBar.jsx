import React from 'react'
import './SearchBar.css'
import { HiOutlineSearch, HiOutlineCalendar, HiOutlineBell, HiOutlineUser } from "react-icons/hi";

const SearchBar = () => {
    return (
        <div className='search-bar'>
                <div className="searchInputContent">
                    <HiOutlineSearch />
                    <input type="text" className='searchInputText' placeholder='Pesquisa rápida...'/>
                </div>
                <div className='separation'></div>
                <div className='interactiveIcons'>
                    <div className='iconsSearchBar'>
                        <HiOutlineCalendar size={20} color='#7182B6' /> 
                    </div>
                    <div className='iconsSearchBar'>
                        <HiOutlineBell size={20} color='#7182B6' />
                    </div>
                    <div className='iconsSearchBar'>
                        <HiOutlineUser size={20} color='#7182B6' />
                    </div>
                </div>
        </div>
    )
}

export default SearchBar
