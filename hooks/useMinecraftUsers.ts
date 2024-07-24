import { useState, useEffect } from 'react'

const useMinecraftUsers = () => {
  const [minecraftUsers, setMinecraftUsers] = useState<number | undefined>(undefined)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.minetools.eu/ping/play.leafcity.ru', {
          method: 'GET',
          cache: 'no-store'
        })
        const { players } = await response.json()
        setMinecraftUsers(players.online)
      } catch (error) {
        console.log(error)
      }
    }

    fetchUsers()
  }, [])

  return { minecraftUsers }
}

export default useMinecraftUsers
