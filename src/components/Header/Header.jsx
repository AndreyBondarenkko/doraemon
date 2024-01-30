import React from 'react'

/*** Componenst ***/
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'

const Header = ({ menu }) => {
  return (
    <header className='Header py-2' id='header'>
      <div className="container">
        <div className="header-layout flex-items-center justify-between gap-2">
          <Logo />
          <Navbar menu={menu} />
          <Search />
        </div>
      </div>
    </header>
  )
}

export default Header
