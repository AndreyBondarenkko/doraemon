import React from 'react'

/*** Libs ***/
import { motion } from "framer-motion"

/*** Icons ***/
import { CgMenuRightAlt } from "react-icons/cg";

/*** Componenst ***/
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'

const Header = ({ menu }) => {
  const [isMenuOpen, setMenuIsOpen] = React.useState(false)

  return (
    <header className='Header py-2' id='header'>
      <div className="container">
        <div className="header-layout flex-items-center justify-between gap-2">
          <Logo />
          <Navbar menu={menu} isMenuOpen={isMenuOpen} />
          <div className="wrap flex-items-center gap-3">
            <Search />
            <button className="trigger-mobile-menu bg-primary hover:bg-primary/80 p-2 rounded-full cursor-pointer text-white md:hidden"
              onClick={() => setMenuIsOpen(isMenuOpen => !isMenuOpen)}>
              <CgMenuRightAlt className="w-[20px] h-auto" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
