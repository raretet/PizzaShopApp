import s from './InstSection.module.scss'
import one from '../../../assets/images/inst/1.png'
import two from '../../../assets/images/inst/2.png'
import three from '../../../assets/images/inst/3.png'
import four from '../../../assets/images/inst/4.png'
import five from '../../../assets/images/inst/5.png'
import six from '../../../assets/images/inst/6.png'
import seven from '../../../assets/images/inst/7.png'
import eight from '../../../assets/images/inst/8.png'
import nine from '../../../assets/images/inst/9.png'
import ten from '../../../assets/images/inst/10.png'
import { useScroll } from 'app/global/contexts/ScrollContext'

interface InstSectionProps {
  id: string
}

export default function InstSection({ id }: InstSectionProps) {
  const { setRef } = useScroll()

  return (
    <div className={s.section} ref={setRef(id)}>
      <div className={s.container}>
        <div className={s.title}>Следите за нами в Instagram</div>
        <div className={s.subtitle}>@pizzamenu</div>
        <div className={s.photos}>
          <img src={one} alt="" />
          <img src={two} alt="" />
          <img src={three} alt="" />
          <img src={four} alt="" />
          <img src={five} alt="" />
          <img src={six} alt="" />
          <img src={seven} alt="" />
          <img src={eight} alt="" />
          <img src={nine} alt="" />
          <img src={ten} alt="" />
        </div>
      </div>
    </div>
  )
}
