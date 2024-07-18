export const getOnlineDiscordUsers = async () => {
  try {
    const response = await fetch(
      'https://discordapp.com/api/guilds/1170345596247355506/widget.json',
      {
        method: 'GET',
        cache: 'no-store'
      }
    )
    const { presence_count: users } = await response.json()

    return users
  } catch (e) {
    return null
  }
}

export const getOnlineMinecraftUsers = async () => {
  try {
    const response = await fetch('https://api.minetools.eu/ping/play.leafcity.ru', {
      method: 'GET',
      cache: 'no-store'
    })
    const { players } = await response.json()

    const users = players.online
    return users
  } catch (e) {
    return null
  }
}
