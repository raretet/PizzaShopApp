import pizzaStore from 'data/store'
import { observer } from 'mobx-react'
import s from './ShoppingCart.module.scss'
import popupStore from 'data/popupStore'
import OrderForm from '../OrderForm/OrderForm'
import removeIcon from '../../../assets/icons/remove.svg'
import IncrementIcon from '../../../assets/icons/increment.svg'
import DecrementIcon from '../../../assets/icons/decrement.svg'

const ShoppingCart = observer(() => {
  const handleDeletePizza = (id: number) => {
    pizzaStore.removePizza(id)
  }

  // const sumQuantities = (pizzas: any) => {
  //   let totalQuantity: number = 0
  //   pizzas.forEach((obj: any) => {
  //     totalQuantity += obj.quantity
  //   })
  //   return totalQuantity
  // }
  // const totalSum: number = sumQuantities(pizzaStore.pizzas)

  const sumPrices = (pizzas: any) => {
    let totalQuantity: number = 0
    pizzas.forEach((obj: any) => {
      totalQuantity += obj.price * obj.quantity
    })
    return totalQuantity
  }
  const totalPrice: number = sumPrices(pizzaStore.pizzas)

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div
      className={s.container}
      onClick={() => {
        popupStore.togglePopup()
      }}
    >
      <div className={s.cart} onClick={onContentClick}>
        <div className={s.cart_title}>Ваш заказ</div>
        <div className={s.items_container}>
          {pizzaStore.pizzas.map((pizza) => (
            <div className={s.item} key={Math.random()}>
              <div style={{ display: 'flex' }}>
                <img src={pizza.img} alt="" />
                <div className={s.item_info}>
                  <div className={s.item_name}>{pizza.name}</div>
                  <div className={s.item_size}>{pizza.size + ' ' + 'см'}</div>
                </div>
              </div>
              <div className={s.quantity}>
                <button
                  disabled={pizza.quantity <= 1}
                  onClick={() => pizzaStore.decrementQuantity(pizza.id)}
                >
                  <img src={DecrementIcon} alt="" />
                </button>
                <div className={s.item_quantity}>{pizza.quantity}</div>
                <button onClick={() => pizzaStore.incrementQuantity(pizza.id)}>
                  <img src={IncrementIcon} alt="" />
                </button>
              </div>
              <div className={s.item_price}>
                {pizza.price * pizza.quantity + ' руб'}
                <button onClick={() => handleDeletePizza(pizza.id)}>
                  <img src={removeIcon} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={s.total}>
          Сумма заказа: <b>{totalPrice}</b> руб
        </div>
        <OrderForm />
      </div>
    </div>
  )
})

export default ShoppingCart
