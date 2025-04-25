import style from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={style['footer']}>
      <div className={style['top']}>
        <div className={style['col']}>
          <img src="logos/logo.png" alt="Logo" className={style['logo']} />
          <p>
            Полный цикл разработки и поддержки чат-ботов — от проектирования до размещения и технического обслуживания.
          </p>
        </div>

        <div className={style['col']}>
          <h4>Продукт</h4>
          <ul>
            <li><a href="#">Тарифы</a></li>
            <li><a href="#">Чат-боты и виртуальные ассистенты</a></li>
            <li><a href="#">Автоматизация бизнес-процессов</a></li>
            <li><a href="#">Веб-разработка и веб-приложения</a></li>
            <li><a href="#">IT-консалтинг и аудит</a></li>
          </ul>
        </div>

        <div className={style['col']}>
          <h4>Компания</h4>
          <ul>
            <li><a href="#">Команда</a></li>
            <li><a href="#">Отзывы</a></li>
            <li><a href="#">Кейсы</a></li>
            <li><a href="mailto:info@domain.com" className={style['email']}>info@domain.com</a></li>
          </ul>
        </div>
      </div>

      <div className={style['bottom']}>
        <p>Copyright © 2025, All rights reserved.</p>
        <p>Design Alex | Luna8.io</p>
      </div>
    </footer>
  )
}
