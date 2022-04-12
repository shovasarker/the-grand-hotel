import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound'
import Rooms from './pages/Rooms'
import Header from './pages/shared/Header/Header'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
