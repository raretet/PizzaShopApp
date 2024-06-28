import { makeAutoObservable } from 'mobx'

class PopupStore {
  isPopupOpen: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen
  }
}

const popupStore = new PopupStore()
export default popupStore
