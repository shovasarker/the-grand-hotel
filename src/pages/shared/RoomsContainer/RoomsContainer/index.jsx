import React from 'react'
import useRooms from '../../../../hooks/useRooms'
import PageTitle from '../../standalone/PageTitle'
import Spinner from '../../standalone/Spinner'
import Room from '../components/Room'

const RoomsContainer = ({ show, title }) => {
  const { rooms, loading, error } = useRooms()

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return (
      <h2 className='text-center text-2xl font-medium text-red-600'>{error}</h2>
    )
  }

  return (
    <div>
      <PageTitle title={title} />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
        {rooms
          ?.filter((room, i) => (show ? i < show : i >= 0))
          ?.map((room) => (
            <Room key={room.id} room={room} />
          ))}
      </div>
    </div>
  )
}

export default RoomsContainer
