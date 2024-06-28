import s from './FirstSection.module.scss'
import img from '../../../assets/images/section_1_pizza.png'
import { ScrollButton } from 'app/components/ScrollButton/ScrollButton'

export default function FirstSection() {
  return (
    <div className={s.container}>
      <div className={s.order}>
        <div className={s.title}>Пицца на заказ</div>
        <div className={s.description}>
          Бесплатная и быстрая доставка за час в <br></br> любое удобное для вас
          время
        </div>
        <div className={s.btn}>
          <ScrollButton scrollToKey="Menu" name="Выбрать пиццу" />
        </div>
      </div>
      <div className={s.img}>
        <img src={img} alt="" />
      </div>
    </div>
  )
}
