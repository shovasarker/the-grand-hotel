import React from 'react'
import { Link } from 'react-router-dom'
import { FaUmbrellaBeach } from 'react-icons/fa'

const Logo = ({ name, to }) => {
  return (
    <Link
      to={to}
      className='flex justify-center items-center flex-shrink-0 gap-2 px-2 py-1 text-gray-700 border-2 border-gray-700'
    >
      <FaUmbrellaBeach className='w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10' />
      <span className='font-amatic font-bold text-2xl md:text-3xl lg:text-4xl'>
        {name}
      </span>
    </Link>
  )
}

export default Logo
