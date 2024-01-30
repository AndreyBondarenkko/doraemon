import React from 'react'

const Navbar = ({ menu }) => {
  return (
    <nav>
      <ul className="main-menu-list flex-items-center gap-7">
        {
          menu.map((item, index) =>
            <li key={index} className={`menu-item ${item.active ? 'active' : ''}`}>
              <a href={item.link}>{item.name}</a>
            </li>
          )
        }
      </ul>
    </nav>
  )
}

export default Navbar
