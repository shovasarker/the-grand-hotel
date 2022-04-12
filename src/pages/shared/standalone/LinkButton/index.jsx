import React from 'react'

const LinkButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`border-none bg-transparent text-base font-medium text-gray-700 hover:border-b-gray-700 hover:opacity-70 border-b-2 px-2 pb-1 border-b-transparent transition-all duration-300`}
    >
      {children}
    </button>
  )
}

export default LinkButton
