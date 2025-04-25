import style from './PricingPlans.module.css'

const plans = [
  {
    name: 'Профессионал (PRO)',
    price: '$499',
    subtitle: '/ подключение',
    note: '+ 50 USD / месяц для telegram\n+ 100 USD / месяц для whatsapp',
    features: [
      'Скрипт для нейро-ассистента',
      '1 нейропродавец = 1 менеджер = 1 подключенный номер',
      'Генерация ответов клиентам 24/7',
      'Панель администрирования диалогов',
      'Техническая поддержка',
    ],
  },
  {
    name: 'Максимальный (MAX)',
    label: 'Рекомендованый',
    price: '$899',
    subtitle: '/ подключение',
    note: '+ 50 USD / месяц для telegram\n+ 100 USD / месяц для whatsapp',
    features: [
      'Все из PRO',
      'Загрузка доп. базы данных (до 10 GB файлов)',
      'Неограниченное количество ролей',
      'Промокоды и триггеры активации',
      'Планирование рассылок по существующим диалогам',
      'Higher API Limits',
    ],
  },
  {
    name: 'Корпоративный (CORPX)',
    subtitle: 'Настраивается индивидуально под каждого клиента и задачи',
    withoutPrice: true,
    features: [
      'Все из MAX',
      'Интеграция CRM - amoCRM, Bitrix24 и другие API',
      'Разработка Telegram-бота в связке с нейро-ассистентом',
      'Подключение систем приема и обработки платежей',
      'Приоритетная техническая поддержка',
      'Участие в тестировании нового функционала',
    ],
  },
]

export default function PricingPlans() {
  return (
    <section className={style['pricing-section']}>
      <p className={style['badge']}>Тарифные планы</p>
      <h2 className={style['title']}>Выберите тариф под ваши нужды</h2>

      <div className={style['cards']}>
        {plans.map((plan, idx) => (
          <div key={idx} className={`${style['card']} ${plan.label ? style['highlight'] : ''}`}>
            {plan.label && <div className={style['label']}>{plan.label}</div>}

            <h3 className={style['plan-name']}>{plan.name}</h3>
            {plan.price && (
              <p className={style['price']}>
                {plan.price} <span>{plan.subtitle}</span>
              </p>
            )}

            {!plan.price && plan.withoutPrice &&(
              <p className={`${style['price']} ${style['without-price']}`}>
                <span>{plan.subtitle}</span>
              </p>
            )}

            {plan.note && (
              <p className={style['note']}>
                {plan.note.split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </p>
            )}

            <ul className={style['features']}>
              {plan.features.map((f, i) => (
                <li key={i}>✓ {f}</li>
              ))}
            </ul>

            <button className={style['button']}>Связаться</button>
          </div>
        ))}
      </div>
    </section>
  )
}
