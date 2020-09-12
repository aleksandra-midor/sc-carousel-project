import React, { useState } from 'react'
import flickr from '../../apiKeys'
import ThumbsGallery from '../../components/ThumbsGallery/ThumbsGallery';

const SearchPage = () => {

const [searchInput, setSearchInput] = useState('');
const [fetchedData, setFetchedData] = useState({})
const [showGallery, setShowGallery] = useState(false)
console.log(fetchedData, searchInput)

const handleSubmit = () => { 
  fetch (`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickr.key}&tags=${searchInput}&format=json&nojsoncallback=1`)
  .then((res) => res.json())
  .then((data) => {
    if (data.stat === 'ok') {
      setFetchedData(data) 
      if (data.photos.total !== '0') {
        setShowGallery(true)
      }
    } else {console.error(data)}
  })
}


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
    onClick={handleSubmit}
    >
    Search</button>
    <p>{searchInput}</p>
   {showGallery && (<ThumbsGallery></ThumbsGallery>)}

    </main>
    
  )
}
export default SearchPage