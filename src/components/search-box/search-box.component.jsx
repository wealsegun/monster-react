import React from 'react';

import './search-box.styles.css';




export const SearchBox = ({handleChange, placeholder}) => (
    <input className="search-box" type="search" placeholder={placeholder} 
    onChange={handleChange}/>
)
// export const SearchBox = props => (
// <input className="search-box" type="search" placeholder='search monsters' onChange={props.onSearchChange}/>
// );

