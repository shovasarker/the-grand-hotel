import React, { useContext } from 'react'
import MenuContext from '../../../../../contexts/MenuContext'
import CustomLink from '../CustomLink'

const Menu = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext)
  const handleCloseMenu = () => {
    setIsOpen(false)
  }
  return (
    <div
      className={`w-full flex flex-col md:flex-row justify-end items-center gap-4 absolute md:static bg-white left-1/2 -translate-x-1/2 ${
        isOpen ? 'top-20' : '-top-40'
      } transition-all duration-300`}
    >
      <CustomLink to={'/'} onClick={handleCloseMenu}>
        Home
      </CustomLink>
      <CustomLink to={'/about'} onClick={handleCloseMenu}>
        About
      </CustomLink>
      <CustomLink to={'/login'} onClick={handleCloseMenu}>
        Login
      </CustomLink>
    </div>
  )
}

export default Menu
