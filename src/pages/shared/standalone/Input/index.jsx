import React from 'react'

const Input = ({ id, type, placeholder, label, value, onChange, required }) => {
  return (
    <div className='relative border border-gray-700 mt-6 text-gray-700'>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className='peer w-full px-4 py-2 outline-none focus:placeholder:text-transparent'
        placeholder={placeholder}
        required
      />
      <label
        htmlFor='email'
        className='absolute -top-3 left-4 text-gray-700 text-sm px-2 bg-white peer-focus:text-gray-700
            peer-focus:-top-3 peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-transparent peer-placeholder-shown:px-0 peer-placeholder-shown:text-base transition-all duration-300'
      >
        {label}
      </label>
    </div>
  )
}

export default Input
