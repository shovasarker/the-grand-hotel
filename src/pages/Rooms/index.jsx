import React from 'react'
import RoomsContainer from '../shared/RoomsContainer/RoomsContainer'
import Container from '../shared/standalone/Container'

const Rooms = () => {
  return (
    <Container>
      <RoomsContainer title={'All Available Rooms'} />
    </Container>
  )
}

export default Rooms
