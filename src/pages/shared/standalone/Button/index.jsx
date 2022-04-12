import React from 'react'

const Button = ({
  children,
  onClick,
  fullWidth,
  variant,
  mtAuto,
  bTop,
  mxAuto,
}) => {
  return (
    <button
      onClick={onClick}
      className={`block ${fullWidth ? 'w-full' : ''} px-5 py-2 ${
        mtAuto ? 'mt-auto' : 'mt-5'
      } ${mxAuto && 'mx-auto'} ${
        variant === 'outlined'
          ? 'bg-transparent text-gray-700 hover:text-white hover:bg-gray-700'
          : 'bg-gray-700 text-white hover:bg-transparent hover:text-gray-700'
      } font-bold text-base ${
        bTop ? 'border-t border-t-gray-700' : 'border border-gray-700'
      } transition-colors duration-300`}
    >
      {children}
    </button>
  )
}

export default Button
