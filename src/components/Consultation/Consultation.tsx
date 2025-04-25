import style from './Consultation.module.css'
import { Link } from 'lucide-react'

export default function Consultation() {
    
  return (
    <section className={style['consultation-section']}>
      <div className={style['consultation-text']}>
        <h2 className={style['title']}>
          Получить бесплатную консультацию по разбору вашего бизнеса
        </h2>
        <p className={style['subtitle']}>
          Консультация онлайн и займет всего 30 минут
        </p>
        <button className={style['button']}>
          Выбрать время <Link/>
        </button>
      </div>

      <div className={style['consultation-image-wrapper']}>
        <img src="/consult-bg.png" alt="Консультация" className={style['image']} />
      </div>
    </section>
  )
}
