import { routes } from '@/constants/routes'

export async function getGenerationImagesList() {
  try {
    const imageResponse = await fetch(routes.generationImagesUrl)

    if (!imageResponse.ok) {
      throw new Error(`Ошибка: сервер вернул статус ${imageResponse.status}`)
    }

    const generationList = await imageResponse.json()
    return generationList
  } catch (error) {
    console.error('Ошибка получения списка изображений генерации:', error)
    return []
  }
}

export async function getProjectsImagesList() {
  try {
    const imageResponse = await fetch(routes.projectsImagesUrl)

    if (!imageResponse.ok) {
      throw new Error(`Ошибка: сервер вернул статус ${imageResponse.status}`)
    }

    const projectsList = await imageResponse.json()
    return projectsList
  } catch (error) {
    console.error('Ошибка получения списка изображений проектов:', error)
    return []
  }
}
