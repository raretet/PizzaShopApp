import s from './FourthSection.module.scss'
import first from '../../../assets/images/section_3_1.png'
import second from '../../../assets/images/section_3_2.png'
import third from '../../../assets/images/section_3_3.png'

export default function FourthSection() {
  return (
    <div className={s.section}>
      <div className={s.content}>
        <div className={s.item}>
          <img src={first} alt="" />
          <div>
            <div className={s.title}>
              Изготавливаем пиццу по своим рецептам в лучших традициях
            </div>
            <div className={s.description}>
              Наша пицца получается сочной, вкусной и главное хрустящей c нежной
              и аппетитной начинкой, готовим по своим итальянским рецептам
            </div>
          </div>
        </div>
        <div className={`${s.item} ${' '} ${s.second}`}>
          <img src={second} alt="" />
          <div>
            <div className={s.title}>Используем только свежие ингридиенты</div>
            <div className={s.description}>
              Ежедневно заготавливаем продукты и овощи для наших пицц, соблюдаем
              все сроки хранения
            </div>
          </div>
        </div>
        <div className={s.item}>
          <img src={third} alt="" />
          <div>
            <div className={s.title}>
              Доставка в течение 60 минут или заказ за наш счёт
            </div>
            <div className={s.description}>
              Все наши курьеры - фанаты серии Need for Speed и призеры гонок
              World Rally Championship и World Superbike во всех категориях
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
