import React, { useState } from 'react';

export function SearchComponent (props) {
  function handleSearchClick(event) {
    setSearchValue('');
  }
  function handleSearch(event){
    setSearchValue(event.target.value);
    console.log(searchValue);
  } 
  const [searchValue, setSearchValue] = useState('');
    return (
      <input 
          type = "text"
          value = { searchValue }
          onChange = { handleSearch }
          onClick = { handleSearchClick }
          placeholder = "Suche"
          id="headerTab"
      />
    );
}