import React from 'react'

function SearchBar( { ...rest } ) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search for Pokemon..."
      {...rest} 
    />
  )
}

export default SearchBar
