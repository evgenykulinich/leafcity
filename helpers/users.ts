export const getOnlineUsers = async () => {
  try {
    const response = await fetch(
      'https://discordapp.com/api/guilds/1170345596247355506/widget.json'
    )
    const { presence_count: users } = await response.json()

    return users
  } catch (e) {
    return null
  }
}
