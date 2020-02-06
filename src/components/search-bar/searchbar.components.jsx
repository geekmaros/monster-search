import React from 'react';
import './searchbar.styles.css'


export const SearchBar = ({placeholder, handleChange }) => {
   return <div className="input-container">
        <input onChange={handleChange} type="search" placeholder={placeholder} className="input"/>
    </div>
} 