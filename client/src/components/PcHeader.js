import React from 'react'
import { SearchBar } from './SearchBar'
import { Navbar } from './Navbar'

export const PcHeader = () => {
  return (
    <div className="border-bottom">
      <header className="container pc-nav-grid py-1">
        <p className="bold color-primary">Ecoworld .</p>
        <SearchBar />
        <Navbar />
      </header>
    </div>
  )
}
