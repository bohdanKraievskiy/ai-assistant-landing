import style from './IntegratedWith.module.css'

export default function IntegratedWith() {
  return (
    <section className={style['integrated-section']}>
      <div className={style['integrated-section-title']}>
        <hr className={style['line']} />
        <span className={style['text']}>Интеграции со всеми известными сервисами</span>
        <hr className={style['line']} />
      </div>

      <div className={style['integrated-logos-container']}>
        <img src="/logipsum.png" alt="logo 1" />
        <img src="/logipsum.png" alt="logo 2" />
        <img src="/logipsum.png" alt="logo 3" />
        <img src="/logipsum.png" alt="logo 4" />
      </div>
    </section>
  )
}
