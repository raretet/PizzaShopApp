import pizzaStore from 'data/store'
import s from './Button.module.scss'
import { observer } from 'mobx-react'

export interface ButtonProps {
  id: number
  name: string
  price: number
  img: string
  size: number
  quantity: number
}

const Button = observer(
  ({ id, name, price, img, size, quantity }: ButtonProps) => {
    return (
      <div className={s.pizza_card_btn}>
        <button
          onClick={() => {
            pizzaStore.addPizza({ id, name, price, img, size, quantity })
          }}
        >
          ЗАКАЗАТЬ
        </button>
      </div>
    )
  }
)

export default Button
