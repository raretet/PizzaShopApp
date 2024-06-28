import s from './SecondSection.module.scss'

import first from '../../../assets/images/section_2_1.png'
import second from '../../../assets/images/section_2_2.png'
import third from '../../../assets/images/section_2_3.png'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function SecondSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  }

  return (
    <div className={s.center}>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass={s.container}
        removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
        itemClass={s.carousel}
      >
        <div className={s.item}>
          <img src={first} alt="" />
          <div className={s.title}>Закажи 2 пиццы – 3-я в подарок</div>
          <div className={s.description}>
            При заказе 2-x больших пицц - средняя пицца в подарок
          </div>
        </div>
        <div className={s.item}>
          <img src={second} alt="" />
          <div className={s.title}>Напиток в подарок</div>
          <div className={s.description}>
            Скидка на заказ от 3 000 рублей + напиток в подарок
          </div>
        </div>
        <div className={s.item}>
          <img src={third} alt="" />
          <div className={s.title}>25% при первом заказе</div>
          <div className={s.description}>Скидка новым клиентам!</div>
        </div>
      </Carousel>
    </div>
  )
}
