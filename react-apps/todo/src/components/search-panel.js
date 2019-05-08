import React from 'react' // here for compiler - JSX uses this library

const SearchPanel = () => {
  const searchText = 'Type here to search'
  const searchStyle = {
    fontSize: '20px'
  }

  return <input placeholder={searchText} style={searchStyle}></input>
}

export default SearchPanel