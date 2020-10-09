import React from 'react'
import './search-box.component.css'

export const SearchBox =({placeholder, handelChange})=>(
    <input 
    className='search'
    type='search' 
    placeholder={placeholder} 
    onChange={handelChange}
      />
)