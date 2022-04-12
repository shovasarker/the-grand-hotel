import React from 'react'
import Button from '../../../standalone/Button'

const Room = ({ room }) => {
  const { title, description, facilities, img, price, roomAvailable } = room
  return (
    <div className='h-full font-lato border border-gray-700 text-gray-700 flex flex-col'>
      <img src={img} alt={title} className='w-full' />
      <div className='px-5 py-4 h-full'>
        <h3 className='text-3xl font-bold'>{title}</h3>
        <p className='text-lg font-normal mt-3'>{description}</p>
        <div className='mt-4'>
          <h4 className='text-xl font-bold'>Facilities Available</h4>{' '}
          <ul className='list-outside list-disc ml-5 mt-3'>
            {facilities?.map((item, i) => (
              <li key={i} className='mt-2'>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className='font-normal mt-3'>
          Price : <span className='font-bold'>${price}</span>
        </p>
        <p className='mt-3'>
          Booking Left:{' '}
          <span className='font-bold'>
            {roomAvailable ? roomAvailable : 'No Room Left'}
          </span>
        </p>
      </div>
      <Button variant={'outlined'} fullWidth mtAuto bTop>
        Book Room
      </Button>
    </div>
  )
}

export default Room
