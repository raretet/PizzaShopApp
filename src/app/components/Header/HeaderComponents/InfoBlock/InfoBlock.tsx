import Pizza from '../../../../assets/icons/pizzaCart.svg'
import Phone from '../../../../assets/icons/phone.svg'
import s from './InfoBlock.module.scss'
import popupStore from 'data/popupStore'

interface InfoBlockProps {
  title: string
  description: string
  svg: string
  cart: boolean
}

export default function InfoBlock({
  title,
  description,
  svg,
  cart
}: InfoBlockProps) {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <div
          className={s.title}
          onClick={() => (cart ? popupStore.togglePopup() : '')}
        >
          {title}
        </div>
        <div className={s.description}>{description}</div>
      </div>
      <img
        className={s.img}
        src={svg === 'pizza' ? Pizza : Phone}
        alt=""
        onClick={() => (cart ? popupStore.togglePopup() : '')}
        style={{ cursor: `${cart ? 'pointer' : ' '}` }}
      />
      {cart}
    </div>
  )
}
