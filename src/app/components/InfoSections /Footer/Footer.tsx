import s from './Footer.module.scss'
import logo from '../../../assets/icons/logo_white.svg'

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.info}>
        <img src={logo} alt="" />
        <div>
          <div className={s.title}>+7 (918) 432-65-87</div>
          <div className={s.description}>Ежедневно c 9:00 до 23:00</div>
        </div>
      </div>
      <div className={s.police}>Даниил Рассаднев</div>
    </div>
  )
}
