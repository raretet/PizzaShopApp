import { useState } from 'react'
import s from './PizzaCard.module.scss'
import Button from '../Button/Button'

export interface PizzaCardProps {
  id: number
  name: string
  description: string
  price: number
  type: string
  img: string
  quantity: number
}

const S = 20
const M = 30
const L = 40

export default function PizzaCard({
  name,
  description,
  price,
  img,
  type,
  id,
  quantity
}: PizzaCardProps) {
  const [selectedSize, setSelectedSize] = useState(L)

  return (
    <div className={s.pizza_card}>
      <div className={s.pizza_type}>
        <img src={`/src/app/assets/icons/${type}.svg`} alt="" />
      </div>
      <div className={s.pizza_img_container}>
        <img
          className={s.pizza_img}
          style={{
            width: `${
              selectedSize === S
                ? '150px'
                : selectedSize === M
                  ? '175px'
                  : '200px'
            }`,
            height: `${
              selectedSize === S
                ? '150px'
                : selectedSize === M
                  ? '175px'
                  : '200px'
            }`
          }}
          src={img}
          alt=""
        />
      </div>
      <div className={s.pizza_name}>{name}</div>
      <div className={s.pizza_description}>{description}</div>
      <div className={s.size_description}>Размер, см:</div>
      <div className={s.size_switcher}>
        <button
          className={selectedSize === S ? s.active : ''}
          onClick={() => setSelectedSize(S)}
        >
          20
        </button>
        <button
          className={selectedSize === M ? s.active : ''}
          onClick={() => setSelectedSize(M)}
        >
          30
        </button>
        <button
          className={selectedSize === L ? s.active : ''}
          onClick={() => setSelectedSize(L)}
        >
          40
        </button>
      </div>
      <div className={s.pizza_price}> {price} руб.</div>
      <Button
        id={id}
        name={name}
        img={img}
        price={price}
        size={selectedSize}
        quantity={quantity}
      />
    </div>
  )
}
