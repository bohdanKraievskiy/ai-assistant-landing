import style from './Header.module.css'

export default function Header() {
    return (
        <section className={style['navbar-layout']}>
          <img src='/logo.png' style={{height: 50 }}></img>
          <div className={style['navbar-items-div']}>
            <div className={style['navbar-item']}>
              <text>
                Тарифы
              </text>
            </div>
            <div className={style['navbar-item']}>
              <text>
                Услуги
              </text>
            </div>
            <div className={style['navbar-item']}>
              <text>
                Кейсы
              </text>
            </div>
            <div className={style['navbar-item']}>
              <text>
                Отзывы
              </text>
            </div>
            <div className={style['navbar-item']}>
              <text>
                Команда
              </text>
            </div>
          </div>

          <button className={style['hero-blue-button']} style={{width: 225, height:44}}>
              Получить консультацию
          </button>
    
        </section>
    )
  }
  