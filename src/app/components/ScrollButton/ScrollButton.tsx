import { useScroll } from 'app/global/contexts/ScrollContext'
import s from './ScrollButtom.module.scss'

interface ScrollButtonProps {
  scrollToKey: string
  name: string
}

export const ScrollButton = ({ scrollToKey, name }: ScrollButtonProps) => {
  const { scrollTo } = useScroll()
  return (
    <button className={s.btn} onClick={() => scrollTo(scrollToKey)}>
      {name}
    </button>
  )
}
