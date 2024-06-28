import { makeAutoObservable } from 'mobx'

interface Item {
  id: number
  name: string
  description: string
  price: number
  type: string
  img: string
  quantity: number
}

class FilterStore {
  items: Item[] = []
  filterType: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  setItems(items: Item[]) {
    this.items = items
  }

  getFilteredItems() {
    return this.filterType
      ? this.items.filter((item) => item.type === this.filterType)
      : this.items
  }

  setFilterType(type: string) {
    this.filterType = type
  }
}

const filterStore = new FilterStore()
export default filterStore
