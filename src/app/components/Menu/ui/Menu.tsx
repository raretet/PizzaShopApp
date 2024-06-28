import { supabase } from 'data/supabase'
import { useEffect, useState } from 'react'
import s from './Menu.module.scss'
import PizzaCard from '../elements /PizzaCard/PizzaCard'
import { ShoppingCart } from 'app/components/ShoppingCart'
import popupStore from 'data/popupStore'
import { observer } from 'mobx-react'
import { useScroll } from 'app/global/contexts/ScrollContext'
import filterStore from 'data/filterStore'

interface MenuProps {
  id: string
}

const Menu = observer(({ id }: MenuProps) => {
  const [fetchError, setFetchError] = useState<any[] | []>([])
  const { setRef } = useScroll()

  useEffect(() => {
    const fetchPizzas = async () => {
      const { data, error } = await supabase.from('pizzas').select()

      if (error) {
        setFetchError(['Could not fetch the pizzas'])
        console.log(error)
      }

      if (data) {
        setFetchError([])
        filterStore.setItems(data)
      }
    }
    fetchPizzas()
  }, [])

  return (
    <>
      <div className={s.title} ref={setRef(id)}>
        Выберите Пиццу
      </div>
      <div className={s.filter}>
        <button onClick={() => filterStore.setFilterType('')}>все</button>
        <button onClick={() => filterStore.setFilterType('hot')}>острые</button>
        <button onClick={() => filterStore.setFilterType('meat')}>
          мясные
        </button>
        <button onClick={() => filterStore.setFilterType('cheese')}>
          сырные
        </button>
        <button onClick={() => filterStore.setFilterType('vegan')}>
          веганские
        </button>
      </div>
      <div className={s.container}>
        {fetchError && fetchError}
        {filterStore.items ? (
          filterStore
            .getFilteredItems()
            .slice()
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((pizza) => (
              <div className={s.pizza_card_container} key={pizza.id}>
                <PizzaCard
                  id={pizza.id}
                  name={pizza.name}
                  description={pizza.description}
                  price={pizza.price}
                  type={pizza.type}
                  img={pizza.img}
                  quantity={1}
                />
              </div>
            ))
        ) : (
          <p>Loading...</p>
        )}
        {popupStore.isPopupOpen ? <ShoppingCart /> : <></>}
      </div>
    </>
  )
})

export default Menu
