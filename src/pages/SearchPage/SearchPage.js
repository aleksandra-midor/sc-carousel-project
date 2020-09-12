import React, { useState } from 'react'
import flickr from '../../apiKeys'

const SearchPage = () => {

const [searchInput, setSearchInput] = useState('');
const [fetchedData, setFetchedData] = useState({})
console.log(fetchedData, searchInput)

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
      fetch (`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickr.key}&tags=${searchInput}&format=json&nojsoncallback=1`)
      .then((res) => res.json())
      .then((data) => {
        if (data.stat === 'ok') {
          setFetchedData(data)
        }
      })
    }}
    >
    Search</button>
    <p>{searchInput}</p>
    
    </main>
    
  )
}
export default SearchPage