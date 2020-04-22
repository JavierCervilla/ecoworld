import React from 'react'

import searchIcon from '../assets/search-icon.svg'
import closeIcon from '../assets/close-icon.svg'

const handleFocus = () =>{
  let searchBar = document.querySelector('.searchbar');
  searchBar.classList.toggle('searchbar-grid-active');
  let closeIcon = document.getElementById('searchClose');
  closeIcon.classList.toggle('active-icon-searchbar');
  if (document.querySelector('#searchBar').value)
  {
    document.querySelector('#searchBar').value = '';
  }

}

export const SearchBar = () => {
  return (
    <div className="searchbar border py">
      <span className="px flex-align-center"><img style={{height: '11px', width: '12px', opacity: '.5'}} src={searchIcon} alt=""/></span>
      <input
      onFocus={handleFocus}
      onBlur={handleFocus}
      type="text" name="search" id="searchBar"
      placeholder="Buscar Un Producto"/>
      <span onClick={handleFocus} id="searchClose" className="searchClose"><img style={{height: '16px', width: '16px', opacity: '.5'}} src={closeIcon} alt=""/></span>
    </div>
  )
}
