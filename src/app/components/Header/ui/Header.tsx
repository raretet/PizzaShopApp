import pizzaStore from 'data/store'
import InfoBlock from '../HeaderComponents/InfoBlock/InfoBlock'
import s from './Header.module.scss'
import { observer } from 'mobx-react'
import logo from '../../../assets/icons/logo.svg'
import burgerMenu from '../../../assets/icons/burgerMenu.svg'
import { ScrollButton } from 'app/components/ScrollButton/ScrollButton'
import burgerMenuStore from 'data/burgerMenuStore'

const Header = observer(() => {
  const sumQuantities = (pizzas: any) => {
    let totalQuantity: number = 0
    pizzas.forEach((obj: any) => {
      totalQuantity += obj.quantity
    })
    return totalQuantity
  }
  const totalSum: number = sumQuantities(pizzaStore.pizzas)

  return (
    <div className={s.header}>
      <div className={s.content}>
        <div className={s.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={s.navigation}>
          <ScrollButton scrollToKey="Menu" name="МЕНЮ" />
          <ScrollButton scrollToKey="About" name="О НАС" />
          <ScrollButton scrollToKey="Contacts" name="КОНТАКТЫ" />
        </div>
        <div className={s.info_block}>
          <InfoBlock
            title="+7 (999) 999-99-99"
            description="Ежедневно с 9:00 до 23:00"
            svg="phone"
            cart={false}
          />
          <div className={s.cart}>
            <div className={s.cart_counter}>{totalSum}</div>
            <InfoBlock
              title="Корзина"
              description={''}
              svg="pizza"
              cart={true}
            />
          </div>
          <img
            src={burgerMenu}
            className={s.burger_button}
            onClick={() => burgerMenuStore.toggleMenu()}
            style={{ display: burgerMenuStore.isMenuOpen ? 'none' : '' }}
          />
        </div>
      </div>
    </div>
  )
})

export default Header
