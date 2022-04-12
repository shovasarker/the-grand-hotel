import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import MenuContext from '../../../../../contexts/MenuContext'
import CustomLink from '../CustomLink'
import auth from '../../../../../firebase/firebase.init.js'
import LinkButton from '../../../standalone/LinkButton'
import { signOut } from 'firebase/auth'

const Menu = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext)
  const [user] = useAuthState(auth)
  const handleCloseMenu = () => {
    setIsOpen(false)
  }
  return (
    <div
      className={`w-full flex flex-col md:flex-row justify-end items-center gap-4 absolute md:static bg-white left-1/2 -translate-x-1/2 md:translate-x-0 ${
        isOpen ? 'top-20' : '-top-40'
      } transition-all duration-300`}
    >
      <CustomLink to={'/'} onClick={handleCloseMenu}>
        Home
      </CustomLink>
      <CustomLink to={'/rooms'} onClick={handleCloseMenu}>
        Rooms
      </CustomLink>
      <CustomLink to={'/about'} onClick={handleCloseMenu}>
        About
      </CustomLink>
      {user ? (
        <LinkButton onClick={() => signOut(auth)}>Sign Out</LinkButton>
      ) : (
        <CustomLink to={'/login'} onClick={handleCloseMenu}>
          Login
        </CustomLink>
      )}
    </div>
  )
}

export default Menu
