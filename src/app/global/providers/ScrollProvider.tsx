import React, { ReactNode, useCallback, useRef } from 'react'
import { ScrollContext } from '../contexts/ScrollContext'

interface ScrollProviderProps {
  children: ReactNode
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const scrollElements = useRef<{
    [key: string]: React.RefObject<HTMLElement>
  }>({}).current

  const setRef = useCallback(
    (key: string): React.RefObject<HTMLElement> => {
      if (!(key in scrollElements)) {
        scrollElements[key] = React.createRef<HTMLElement>()
      }
      return scrollElements[key]
    },
    [scrollElements]
  )

  const scrollTo = useCallback(
    (key: string): void => {
      const element = scrollElements[key]?.current
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        })
      }
    },
    [scrollElements]
  )

  return (
    <ScrollContext.Provider value={{ setRef, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  )
}
