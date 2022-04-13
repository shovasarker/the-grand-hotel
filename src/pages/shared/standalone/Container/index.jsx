import React from 'react'

const Container = ({ children }) => {
  return (
    <div className='container px-6 md:px-10 lg:px-16 xl:px-20 my-16'>
      {children}
    </div>
  )
}

export default Container
