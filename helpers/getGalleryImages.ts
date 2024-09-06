import { routes } from '@/constants/routes'

export async function getGenerationImagesList() {
  try {
    const imageResponse = await fetch(routes.generationImagesUrl, {
      method: 'GET',
      cache: 'no-store'
    })

    if (!imageResponse.ok) {
      throw new Error(`Ошибка: сервер вернул статус ${imageResponse.status}`)
    }

    const generationList = await imageResponse.json()
    return generationList
  } catch (error) {
    return
  }
}

export async function getProjectsImagesList() {
  try {
    const imageResponse = await fetch(routes.projectsImagesUrl, {
      method: 'GET',
      cache: 'no-store'
    })

    if (!imageResponse.ok) {
      throw new Error(`Ошибка: сервер вернул статус ${imageResponse.status}`)
    }

    const projectsList = await imageResponse.json()
    return projectsList
  } catch (error) {
    return
  }
}
