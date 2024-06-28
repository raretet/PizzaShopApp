import { ScrollButton } from 'app/components/ScrollButton/ScrollButton'
import s from './BurgerMenu.module.scss'
import burgerMenuStore from 'data/burgerMenuStore'
import closeImg from '../../../../assets/icons/remove.svg'

export const BurgerMenu = () => {
  return (
    <div className={burgerMenuStore.isMenuOpen ? s.container : s.closed}>
      <button
        className={s.closeBtn}
        onClick={() => burgerMenuStore.toggleMenu()}
      >
        <img src={closeImg} alt="" />
      </button>
      <div className={s.navigation}>
        <div className={s.navItem} onClick={() => burgerMenuStore.toggleMenu()}>
          <ScrollButton scrollToKey="Menu" name="МЕНЮ" />
        </div>
        <div className={s.navItem} onClick={() => burgerMenuStore.toggleMenu()}>
          <ScrollButton scrollToKey="About" name="О НАС" />
        </div>
        <div
          className={s.navItem}
          onClick={() => burgerMenuStore.toggleMenu()}
          style={{ border: 'none' }}
        >
          <ScrollButton scrollToKey="Contacts" name="КОНТАКТЫ" />
        </div>
      </div>
    </div>
  )
}
