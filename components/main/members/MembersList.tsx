'use client'

import { useEffect } from 'react'

import { members } from '@/data/members'
import { MembersListProps } from '@/interfaces/main'

const MembersList = ({ children }: MembersListProps) => {
  useEffect(() => {
    const membersLoop = document.querySelector('#members')
    if (membersLoop?.children) {
      const membersContent = Array.from(membersLoop.children)

      // Дублируем элементы вне цикла итерации
      const duplicatedMembers = membersContent.map(item => {
        const element = item as Element
        const duplicatedMember = element.cloneNode(true) as Element
        duplicatedMember.setAttribute('aria-hidden', 'true')
        return duplicatedMember
      })

      // Добавляем дублированные элементы в DOM после цикла
      duplicatedMembers.forEach(duplicatedMember => {
        membersLoop.appendChild(duplicatedMember)
      })
    }

    // Очистка при размонтировании
    return () => {
      if (membersLoop?.children) {
        const children = Array.from(membersLoop.children)
        children.forEach((child, index) => {
          if (index >= members.length) {
            membersLoop.removeChild(child)
          }
        })
      }
    }
  }, [])

  return children
}

export default MembersList
