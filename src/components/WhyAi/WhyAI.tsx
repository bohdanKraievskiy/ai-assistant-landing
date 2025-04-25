import style from './WhyAI.module.css'

const reasons = [
  { icon: "icons/icon1.png", text: "Снижение затрат на 30%" , wraped: false},
  { icon: "icons/icon2.png", text: "Автоматизация рутинных задач" , wraped: true},
  { icon: "icons/icon3.png", text: "Персонализированное общение" , wraped: false},
  { icon: "icons/icon4.png", text: "Быстрое внедрение и старт в тот же день" , wraped: true},
  { icon: "icons/icon5.png", text: "Масштабируемость без границ" , wraped: false},
]

export default function WhyAI() {
  return (
    <section className={style['whyai-section']}>
      <p className={style['whyai-subtitle']}>Минимум 5 причин</p>
      <h2 className={style['whyai-title']}>Зачем внедрять ИИ в ваш бизнес?</h2>

      <div className={style['whyai-grid']}>
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`${style['whyai-card']} ${reason.wraped ? style['wrapped'] : ''}`}
            >        
            <img src={reason.icon} alt="icon" className={style['whyai-icon']} />
            <p>{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
