import React from 'react'

/*** Libs ***/
import { GiAtomicSlashes } from "react-icons/gi"

const Logo = () => {
  return (
    <a href='/' className='logo-wrap flex-items-center'>
      <GiAtomicSlashes className='text-6xl text-primary' />

      <span className='flex flex-col text-2xl font-bold text-black leading-5'>
        <span>Dora</span>
        <span>emon</span>
      </span>
    </a>
  )
}
export default Logo;