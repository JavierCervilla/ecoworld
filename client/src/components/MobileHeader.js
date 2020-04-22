import React from 'react'
import menuIcon from '../assets/menu-icon.svg';
import { SearchBar } from './SearchBar';
import { Navbar } from './Navbar';

const handleMenu = () =>{
  let nav = document.querySelector('.m-nav');
  let bgNav = document.querySelector('.bg-m-nav');
  nav.classList.toggle('m-nav-active');
  bgNav.classList.toggle('m-nav-active');
}

export const MobileHeader = () => {
  return (
    <div className="border-bottom">
      <header className="container flex align-center justify-between py-1">
        <p className="bold color-primary">Ecoworld .</p>
        <div className="m-menu" style={{display: 'block'}} onClick={handleMenu}><img src={menuIcon} alt="Menu"/></div>
        <div onClick={handleMenu} className='bg-m-nav'></div>
        <Navbar />
      </header>
      <SearchBar />
    </div>
  )
}
