import { observer } from 'mobx-react'
import { ScrollProvider } from './global/providers/ScrollProvider'
import { MainPage } from './pages/MainPage'
import 'app/global/index.scss'
import burgerMenuStore from 'data/burgerMenuStore'

const App = observer(() => {
  burgerMenuStore.isMenuOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto')

  return (
    <div className={'app'}>
      <ScrollProvider>
        <MainPage />
      </ScrollProvider>
    </div>
  )
})

export default App
