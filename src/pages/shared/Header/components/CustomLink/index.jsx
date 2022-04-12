import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const CustomLink = ({ children, to, onClick }) => {
  const { pathname } = useResolvedPath(to)
  const match = useMatch({ path: pathname, end: true })
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-base font-medium ${
        match
          ? 'text-orange-400  hover:border-b-orange-400'
          : 'text-gray-700 hover:border-b-gray-700'
      }  hover:opacity-70 border-b-2 px-2 pb-1 border-b-transparent transition-all duration-300`}
    >
      {children}
    </Link>
  )
}

export default CustomLink
