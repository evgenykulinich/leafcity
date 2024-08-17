'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { useEffect, useState } from 'react'

import { ProgressBarProviderProps } from '@/interfaces/common'
import { colors } from '@/tailwind.config'

const colorsList = [colors.mango, colors.green, colors.blue, colors.purple]

const ProgressBarProvider = ({ children }: ProgressBarProviderProps) => {
  const [currentColor, setCurrentColor] = useState<string>('')

  useEffect(() => {
    const getRandomColor = () => {
      const randomIndex = Math.floor(Math.random() * colorsList.length)
      return colorsList[randomIndex]
    }

    setCurrentColor(getRandomColor())
  }, [])

  return (
    <>
      {children}
      {currentColor && (
        <ProgressBar
          height="2px"
          color={currentColor}
          options={{ showSpinner: false }}
          shallowRouting
        />
      )}
    </>
  )
}

export default ProgressBarProvider
