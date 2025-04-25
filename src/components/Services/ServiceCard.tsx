import style from './Services.module.css'


interface Props {
  title: string
  subtitle: string
  stack: string[]
  features: string[]
  benefits: string[]
}

export default function ServiceCard({ title, subtitle, stack, features, benefits }: Props) {
  return (
    <div className={style['card']}>
      <h3 className={style['card-title']}>{title}</h3>
      <p className={style['card-subtitle']}>{subtitle}</p>

      <div className={style['stack']}>{stack.join(' • ')}</div>

      <div>
        <p className={style['section-label']}>Возможности:</p>
        <ul className={style['list']}>
          {features.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className={style['section-label']}>Преимущества</p>
        <ul className={style['list']}>
          {benefits.map((item, i) => (
            <li key={i}>✕ {item}</li>
          ))}
        </ul>
      </div>

      <div className={style['footer']}>
        <a href="#" className={style['cta']}>
          Обсудить проект 
        </a>
      </div>
    </div>
  )
}
