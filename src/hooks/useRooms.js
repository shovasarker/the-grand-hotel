import { useEffect, useState } from 'react'

const useRooms = () => {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const getRooms = async () => {
      try {
        setLoading(true)
        const res = await fetch('data.json')
        const data = await res.json()
        if (!Array.isArray(data)) {
          throw data
        }
        setRooms(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error.message)
      }
    }

    getRooms()
  }, [])

  return { rooms, loading, error }
}

export default useRooms
