export const routes = {
  baseUrl: 'https://leafcity.ru',
  head: `${process.env.NEXT_PUBLIC_API_URL}/head`,
  main: '/',
  shop: '/shop',
  map: '/map',
  rules: '/rules',
  wiki: '/wiki',
  gallery: '/gallery',
  discord: 'https://discord.com/invite/leaf-city',
  modpack:
    'https://www.dropbox.com/scl/fi/fwu1tndqp391aova157ge/leafcity.zip?rlkey=1w44i25wekrh0fbh9ts5n0n3v&st=td82qpdn&dl=1',
  discordSupport: 'https://discord.com/channels/1170345596247355506/1182192521372237876',
  generationImagesUrl: `${process.env.NEXT_PUBLIC_API_URL}/fs/images/gallery/generation`,
  projectsImagesUrl: `${process.env.NEXT_PUBLIC_API_URL}/fs/images/gallery/projects`
}
