import style from './UseCases.module.css'

const cases = [
  {
    avatar: 'usecases/usecase1.png',
    title: 'Запись на Тантра-массаж Дубай Москва Бали',
    description: 'Консультирование по услугам / продажи сеансов',
    link: '@leyakoba',
  },
  {
    avatar: '',
    title: 'Психологическая помощь. Нейро-ассистент блогера Рината Гатаева',
    description:
      'Продажа продуктов Рината / Проведение психологических консультаций / запись на сессии по расписанию / продажи продуктов',
    link: '@LeyaAssistent',
  },
  {
    avatar: 'usecases/usecase2.png',
    title: 'Карманный психолог / Анны Смирновой - бесплатно 7 дней',
    description:
      'Психологическая помощь – первые 7 дней бесплатно / выставление счетов на оплату клиентам / рассылка по клиентам с уведомлениями',
    link: '@pocket_psychologis',
  },
]

export default function UseCases() {
  return (
    <section className={style['cases-section']}>
      <h2 className={style['title']}>Реальные кейсы и работающие сценарии</h2>
      <p className={style['subtitle']}>
        Мы уже внедрили ИИ-ассистентов в проектах психологов, блогеров, массажистов и маркетологов
      </p>

      <div className={style['cases-grid']}>
        {cases.map((item, i) => (
          <div className={style['case-card']} key={i}>
            {item.avatar ? (
              <img src={item.avatar} alt="avatar" className={style['avatar']} />
            ) : (
              <div className={style['circle-placeholder']} />
            )}

            <h4 className={style['case-title']}>{item.title}</h4>
            <p className={style['case-description']}>{item.description}</p>

            <a href="#" className={style['case-link']}>
              {item.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
