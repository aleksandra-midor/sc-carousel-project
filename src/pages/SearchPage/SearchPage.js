import React, { useState } from 'react'

const SearchPage = () => {

const [searchInput, setSearchInput] = useState('');

  return (
    <main className='SearchPage'>
      <h1>Search Page</h1>
    <label>
      What are you looking for?
      <input 
      value={searchInput}
      type='text'
      onChange={(event) => {
        setSearchInput(event.target.value)
      }}
      >
      </input>
    </label>
    <p>{searchInput}</p>
    
    </main>
    
  )
}
export default SearchPage