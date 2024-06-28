import { Header } from 'app/components/Header'
import { Menu } from 'app/components/Menu'
import s from './MainPage.module.scss'
import FirstSection from 'app/components/InfoSections /FirstSection /FirstSection'
import SecondSection from 'app/components/InfoSections /SecondSection/SecondSection'
import ThirdSection from 'app/components/InfoSections /ThirdSection/ThirdSection'
import FourthSection from 'app/components/InfoSections /FourthSection/FourthSection'
import InstSection from 'app/components/InfoSections /InstSection/InstSection'
import Footer from 'app/components/InfoSections /Footer/Footer'
import { BurgerMenu } from 'app/components/Header/HeaderComponents/BurgerMenu/BurgerMenu'

export default function MainPage() {
  return (
    <div>
      <Header />
      <BurgerMenu />
      <FirstSection />
      <SecondSection />
      <Menu id={'Menu'} />
      <ThirdSection id={'About'} />
      <FourthSection />
      <InstSection id={'Contacts'} />
      <Footer />
    </div>
  )
}
