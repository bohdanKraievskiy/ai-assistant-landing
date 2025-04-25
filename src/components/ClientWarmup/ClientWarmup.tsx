import style from './ClientWarmup.module.css'
import { AlarmClock } from 'lucide-react'

export default function ClientWarmup() {
  return (
    <section className={style['warmup-section']}>
      <div className={style['warmup-text']}>
        <h2 className={style['title']}>Модуль утепления клиентов</h2>

        <div className={style['subtitle-row']}>
        <AlarmClock />
          <h4 className={style['subtitle']}>Автоматические напоминания</h4>
        </div>

        <p className={style['description']}>
          Система сама инициирует последующие взаимодействия, напоминает о предложениях и стимулирует к покупке
          без участия менеджеров
        </p>
      </div>

      <div className={style['warmup-image']}>
        <img src="/iphone-chat.png" alt="Chat preview" />
      </div>
    </section>
  )
}
