import React from 'react'
import Logo from '../Logo'
import Menu from '../Menu'
import MenuButton from '../MenuButton'

const Navbar = () => {
  return (
    <nav className='container px-6 md:px-10 lg:px-16 xl:px-20 h-20 md:h-auto py-5 md:py-8 '>
      <div className='flex justify-between items-center'>
        <Logo name={'The Grand Hotel'} to={'/'} />
        <MenuButton />
        <Menu />
      </div>
    </nav>
  )
}

export default Navbar
