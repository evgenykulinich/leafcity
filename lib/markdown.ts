import { promises as fs } from 'fs'
import path from 'path'

import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'

import { page_routes } from '@/lib/wiki_routes'

const headingsRegex = /<h([2-4])\b([^>]*)>([\s\S]*?)<\/h\1>/gs
const idRegex = /id=["']([^"']+)["']/

export const getComponentForSlug = async (slug: string) => {
  try {
    const Component = dynamic(() => import(`@/contents/wiki/${slug}`))
    return Component
  } catch (error) {
    return null
  }
}

export async function getTocs(slug: string) {
  const contentPath = getContentPath(slug)

  try {
    let rawTsx = await fs.readFile(contentPath, 'utf-8')
    let match
    const extractedHeadings = []

    while ((match = headingsRegex.exec(rawTsx)) !== null) {
      const headingLevel = parseInt(match[1])
      const headingAttributes = match[2]
      const headingText = match[3].trim()
      const headingSlug = sluggify(headingText)

      // Проверяем, есть ли уже id в заголовке
      if (!idRegex.test(headingAttributes)) {
        // Создаем новый заголовок с id
        const newHeading = `<h${headingLevel} ${headingAttributes} id="${headingSlug}">${headingText}</h${headingLevel}>`

        // Заменяем старый заголовок новым в исходном содержимом
        rawTsx = rawTsx.replace(match[0], newHeading)
      }

      // Добавляем заголовок в список
      extractedHeadings.push({
        level: headingLevel,
        text: headingText,
        href: `#${headingSlug}`
      })
    }

    // Записываем модифицированный файл обратно
    await fs.writeFile(contentPath, rawTsx, 'utf-8')

    return extractedHeadings
  } catch (error) {
    if (error instanceof Error && 'code' in error) {
      const err = error as NodeJS.ErrnoException
      if (err.code === 'ENOENT') {
        notFound()
      } else {
        throw err
      }
    } else {
      throw error
    }
  }
}

export function getPreviousNext(path: string) {
  const index = page_routes.findIndex(({ href }) => href === path)
  return {
    prev: page_routes[index - 1],
    next: page_routes[index + 1]
  }
}

function sluggify(text: string) {
  const slug = text.toLowerCase().replace(/\s+/g, '-')
  return slug.replace(/[^a-zа-яё0-9-]/g, '')
}

function getContentPath(slug: string) {
  return path.join(process.cwd(), '/contents/wiki/', `${slug}.tsx`)
}
