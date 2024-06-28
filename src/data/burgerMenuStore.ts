import { makeAutoObservable } from 'mobx'

class BurgerMenuStore {
  isMenuOpen: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }
}

const burgerMenuStore = new BurgerMenuStore()
export default burgerMenuStore
