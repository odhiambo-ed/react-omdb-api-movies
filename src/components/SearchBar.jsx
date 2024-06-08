import React from 'react'

function SearchBar(props) {
  return (
      <div>
          <input
              type="text"
              value={props.searchValue}
              placeholder="Search..."
              onChange={(event) => props.setSearchValue(event.target.value)}
          />
    </div>
  )
}

export default SearchBar