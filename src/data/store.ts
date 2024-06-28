import { ButtonProps } from 'app/components/Menu/elements /Button/Button'
import { makeAutoObservable } from 'mobx'

class PizzaStore {
  pizzas: ButtonProps[] = []
  updated: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  addPizza(newPizza: ButtonProps) {
    const existingObject = this.pizzas.find(
      (obj) => obj.name === newPizza.name && obj.size === newPizza.size
    )

    if (!existingObject) {
      this.pizzas.push(newPizza)
    } else {
      existingObject.quantity = existingObject.quantity + 1
    }
  }

  getPizzaById(id: number) {
    return this.pizzas.find((pizza) => pizza.id === id)
  }

  decrementQuantity(id: number) {
    const pizza = this.getPizzaById(id)
    if (pizza) {
      pizza.quantity--
    }
  }

  incrementQuantity(id: number) {
    const pizza = this.getPizzaById(id)
    if (pizza) {
      pizza.quantity++
    }
  }

  removePizza(pizzaID: number) {
    this.pizzas = this.pizzas.filter((pizza) => pizza.id !== pizzaID)
  }
}

const pizzaStore = new PizzaStore()
export default pizzaStore
