import { createContext, useContext } from 'react'

interface ScrollContextType {
  setRef: (key: string) => React.RefObject<HTMLElement>
  scrollTo: (key: string) => void
}

export const ScrollContext = createContext<ScrollContextType | null>(null)

export const useScroll = () => {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider')
  }
  return context
}
