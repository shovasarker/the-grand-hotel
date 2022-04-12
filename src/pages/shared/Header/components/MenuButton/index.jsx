import React, { useContext } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { GiTireIronCross } from 'react-icons/gi'
import MenuContext from '../../../../../contexts/MenuContext'

const MenuButton = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext)
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className='md:hidden z-30 px-4 py-2 text-gray-700 shadow-lg border border-gray-700 active:shadow-2xl'
    >
      {isOpen ? (
        <GiTireIronCross className='w-4 h-4' />
      ) : (
        <AiOutlineMenu className='w-4 h-4' />
      )}
    </button>
  )
}

export default MenuButton
