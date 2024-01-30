import React from 'react'

/*** libs ***/
import { FaSearch } from "react-icons/fa"

const Search = () => {
  return (
    <>
      <form method="get" action="/" autoComplete="off"
        className="search-box hidden sm:flex items-center gap-2">
        <input type="text" name="s" aria-label="search" placeholder="Search"
          className="search-input py-2 px-3 rounded-full bg-primary/80 text-white" />
        <button aria-label="submit search"
          className="search-submit bg-primary hover:bg-primary/80 p-3 rounded-full cursor-pointer">
          <FaSearch className='text-white text-sm' />
        </button>
      </form>
    </>
  )
}

export default Search
