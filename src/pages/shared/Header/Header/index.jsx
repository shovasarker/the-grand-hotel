import React from 'react'
import { MenuProvider } from '../../../../contexts/MenuContext'
import Navbar from '../components/Navbar'

const Header = () => {
  return (
    <header>
      <MenuProvider>
        <Navbar />
      </MenuProvider>
    </header>
  )
}

export default Header
