import { useCallback } from 'react'
import { toast } from 'sonner'

export const useCopyToClipboard = () => {
  const copyToClipboard = useCallback(async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      toast.success('Скопировано')
    } catch (e) {
      toast.error('Ошибка :(')
    }
  }, [])

  return copyToClipboard
}
