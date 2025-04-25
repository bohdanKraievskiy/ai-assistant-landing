import style from './Hero.module.css'
import { ArrowRight } from 'lucide-react';

export default function Hero() {

  return (
    <section className={style['hero-layout']}>
      <div className={style['hero-div']}>

        <div className={style['hero-up-section']}>
          <div className={style['hero-title-div']}>
            <h1 className={style['hero-header-title']}>
              Автоматизация общения<br />в мессенджерах через ИИ
            </h1>
            <h3 className={style['hero-subheader-text']}>
              Внедрите персонализированные AI-чат-боты, которые мгновенно отвечают, обрабатывают заявки и заботливо сопровождают клиента на всех этапах — 24/7
            </h3>
          </div>

          <div className={style['hero-buttons-div']}>
            <button className={style['hero-blue-button']}>
              Получить консультацию
            </button>
            <button className={style['hero-white-button']}>
              Демонстрация <ArrowRight/>
            </button>
          </div>
        </div>

        <div className={style['cards-div']}>
          <div className={`${style['hero-card']} ${style['upper-cut']}`}>
            <img src="/card1.png" alt="..." />
          </div>
          <div className={`${style['hero-card']} ${style['down-cut']}`}>
            <img src="/card2.png" alt="..." />
          </div>
          <div className={`${style['hero-card']} ${style['upper-cut']}`}>
            <img src="/card3.png" alt="..." />
          </div>
          <div className={`${style['hero-card']} ${style['down-cut']}`}>
            <img src="/card4.png" alt="..." />
          </div>
        </div>
      </div>
    </section>
  )
}
