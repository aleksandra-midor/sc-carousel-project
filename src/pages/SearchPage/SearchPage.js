import React, { useState } from 'react'
import flickr from '../../apiKeys'

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

    <button
    disabled={searchInput === ''}
    onClick={() => {
      alert (searchInput)
    }}
    >
    Search</button>
    <p>{searchInput}</p>
    
    </main>
    
  )
}
export default SearchPage