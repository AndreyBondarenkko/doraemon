import React from 'react'

const Navbar = ({ isMenuOpen, menu }) => {
  return (
    <nav className={`${isMenuOpen ? 'show' : ''} header-nav`} >

      <ul className="main-menu-list flex-items-center flex-col md:flex-row gap-4 md:gap-7">
        {
          menu.map((item, index) =>
            <li key={index} className={`menu-item ${item.active ? 'active' : ''}`}>
              <a className="text-2xl md:text-base tracking-wide md:tracking-normal text-white md:text-black" href={item.link}>{item.name}</a>
            </li>
          )
        }
      </ul>
    </nav >
  )
}

export default Navbar
