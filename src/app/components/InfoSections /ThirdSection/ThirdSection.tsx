import s from './ThirdSection.module.scss'
import order from '../../../assets/images/order.svg'
import delivery from '../../../assets/images/delivery.svg'
import payment from '../../../assets/images/payment.svg'
import { useScroll } from 'app/global/contexts/ScrollContext'

interface ThirdSectionProps {
  id: string
}

export default function ThirdSection({ id }: ThirdSectionProps) {
  const { setRef } = useScroll()

  return (
    <div className={s.section}>
      <div className={s.container} ref={setRef(id)}>
        <div className={s.title}>Доставка и оплата</div>
        <div className={s.content}>
          <div className={s.item}>
            <img src={order} alt="" />
            <div>
              <div className={s.item_title}>Заказ</div>
              <div className={s.item_description}>
                После оформления заказа мы свяжемся <br></br> c вами для
                уточнения деталей.
              </div>
            </div>
          </div>
          <div className={s.item}>
            <img src={delivery} alt="" />
            <div>
              <div className={s.item_title}>Доставка курьером</div>
              <div className={s.item_description}>
                Мы доставим вашу пиццу горячей.<br></br> Бесплатная доставка по
                городу.
              </div>
            </div>
          </div>
          <div className={s.item}>
            <img src={payment} alt="" />
            <div>
              <div className={s.item_title}>Оплата</div>
              <div className={s.item_description}>
                Оплатить можно наличными или картой <br></br> курьеру. И золотом
                тоже можно.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
