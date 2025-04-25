import style from './Functions.module.css'
import { CircleCheck } from 'lucide-react'

const features = [
  {
    title: "Квалификация лидов",
    description: "Используем различные сценарии для точной квалификации лидов и повышения качества продаж",
  },
  {
    title: "Выявление потребностей",
    description: "Быстрая оценка основных потребностей клиентов для идентификации запросов",
  },
  {
    title: "Обработка возражений",
    description: "Используем креативные подходы для эффективного ответа на возражения и сопровождения клиентов к сделке",
  },
  {
    title: "Запись на встречи",
    description: "Автоматическая запись клиентов на встречи с сотрудниками компании",
  },
  {
    title: "Счета на оплату",
    description: "Отправка клиентам счетов для оплаты услуг",
  },
  {
    title: "Оформление доставок",
    description: "Организация и контроль записей для доставки через курьера",
  },
]

export default function Functions() {
  return (
    <section className={style['functions-section']}>
      <p className={style['badge']}>Некоторые функции</p>
      <h2 className={style['title']}>ИИ-ассистент, который работает как опытный менеджер продаж</h2>
      <p className={style['subtitle']}>
        Квалифицирует лидов, выявляет потребности, обрабатывает возражения и доводит клиента до оплаты —
        автоматически и без ошибок
      </p>

      <div className={style['features-grid']}>
        {features.map((f, idx) => (
          <div className={style['feature-card']} key={idx}>
            <CircleCheck />
            <h4>{f.title}</h4>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
