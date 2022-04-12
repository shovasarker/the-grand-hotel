import React from 'react'
import { useNavigate } from 'react-router-dom'
import RoomsContainer from '../../shared/RoomsContainer/RoomsContainer'
import Button from '../../shared/standalone/Button'
import Container from '../../shared/standalone/Container'

const Home = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <RoomsContainer show={3} title={'Our Rooms'} />
      <Button onClick={() => navigate('/rooms')} variant={'outlined'} mxAuto>
        View All Rooms
      </Button>
    </Container>
  )
}

export default Home
