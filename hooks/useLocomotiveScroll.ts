import { useEffect } from 'react'

export const useLocomotiveScroll = () => {
  useEffect(() => {
    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    }

    initLocomotiveScroll()
  }, [])
}
